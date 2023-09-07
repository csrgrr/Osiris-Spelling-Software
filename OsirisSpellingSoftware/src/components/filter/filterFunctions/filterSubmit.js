'use strict';
import { filterValues } from "/src/components/filter/filterFunctions/updateArrays.js";

export { buildSQL, query};




let query = ""

function buildSQL(){
 // building SQL query 
 query = "WHERE ((";
 let filterColumns = ['volume','page', 'section', 'pyr_page', 'pyr_section', 'locution', 'book', 'spells', 'spellings', 'documents', 'positions', 'time', 'locations'];
 filterColumns.forEach(column => {
 let columnFilters = [];
 let locutionFlag=0;
 let bookFlag=0;
 let spellingNoResultFlag = false;
 let documentNoResultFlag = false;
 const isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);

 filterValues[column].forEach(filter => {
if ((!filterValues['spellings'].length && !spellingNoResultFlag) ){ //SPELLINGS
 columnFilters.push(`(1=0)`); // if you choose nothing, the query does not return anything
 spellingNoResultFlag = true
} else if (!filterValues['documents'].length && !documentNoResultFlag){ //DOCUMENTS 
 columnFilters.push(`(1=0)`); // if you choose nothing, the query does not return anything
 documentNoResultFlag = true
}
if(column == 'volume'){
 if (filter.includes("to")) {
   let range = filter.split(" to ")
   columnFilters.push(`(spelling.vol >= ${romanToNumber(range[0])} AND spelling.vol <= ${romanToNumber(range[1])})`)
 } else {
   columnFilters.push(`spelling.vol = ${romanToNumber(filter)}`)
 }
} else if(column == 'page'){
  if (filter.includes("to")) {
    let range = filter.split(" to ")
    columnFilters.push(`(spelling.page >= ${range[0]} AND spelling.page <= ${range[1]})`)
  } else {
    columnFilters.push(`spelling.page = ${filter}`)
  }

}else if(column == 'section'){
  if (filter.includes("to")) {
    let range = filter.split(" to ")
    columnFilters.push(`(spelling.section >= ${range[0]} AND spelling.section <= ${range[1]})`)
  } else {
    columnFilters.push(`spelling.section = ${filter}`)
  }

}else if(column == 'pyr_page'){
  if (filter.includes("to")) {
    let range = filter.split(" to ")
    columnFilters.push(`(spelling.pyr_page >= ${range[0]} AND spelling.pyr_page <= ${range[1]})`)
  } else {
    columnFilters.push(`spelling.pyr_page = ${filter}`)
  }

}else if(column == 'pyr_section'){
  if (filter.includes("to")) {
    let range = filter.split(" to ")
    columnFilters.push(`(spelling.pyr_section >= ${range[0]} AND spelling.pyr_section <= ${range[1]})`)
  } else {
    columnFilters.push(`spelling.pyr_section = ${filter}`)
  }

}else if (column == 'locution' && locutionFlag < 2) {
 let result = 0;
 if(locutionFlag == 0)
   result = 1;
 else
   result = 0;

 if (filterValues[column][0] && filterValues[column][1]) {
   // do nothing
 } else if (filterValues[column][locutionFlag]) {
   columnFilters.push(`spelling.is_locution = ${result}`);
 } else if (!filterValues[column][0] && !filterValues[column][1]){
   columnFilters.push(`spelling.is_locution = 1 AND spelling.is_locution = 0`);
 }
 locutionFlag +=1
} else if (column == 'book' && bookFlag < 2) {
 let result = "";
 if(bookFlag == 0)
   result = 'PT';
 else
   result = 'CT';

 if ((!filterValues[column][0] && !filterValues[column][1]) || (filterValues[column][0] && filterValues[column][1])) {
   // do nothing
 } else if (filterValues[column][bookFlag]) {
   columnFilters.push(`spell.book = '${result}'`);
 } 
 
 bookFlag+=1

} else if (column == 'spells') {
   if (filter.includes("to")) {
     let range = filter.split(" to ");
     let start = isNumeric(range[0]) ? range[0] : `'${range[0]}'`;
     let end = isNumeric(range[1]) ? range[1] : `'${range[1]}'`;
     
     // Divide PT CT
     let book = 'PT';
     let value = range[0];
     if (value.startsWith('CT')) {
       book = 'CT';
     }
     start = start.replace(/\D/g,'');
     start = parseInt(start);

     end = end.replace(/\D/g,'');
     end = parseInt(end);

     columnFilters.push(`(spell.spell >= ${start} AND spell.spell <= ${end} AND spell.book = '${book}')`);
   } else {
     // Divide PT CT
     let book = '';
     let value = filter;
     if (value.startsWith('PT')) 
       book = 'PT';
     else 
       book = 'CT';

     filter = filter.replace(/\D/g,'');
     filter = parseInt(filter);
     

     columnFilters.push(`(spell.spell = ${filter} AND spell.book = '${book}')`);
   }
} else if (column == 'spellings' && !spellingNoResultFlag) {  
 if (filterValues['spellings'].length !== 47)
   columnFilters.push(`(spelling_type.code = '${filter}')`);
   
} else if (column == 'documents' && !documentNoResultFlag) {  //DOCUMENTS
 if (filterValues['documents'].length !== 199)
   columnFilters.push(`(document.code = '${filter}')`);

} else if (column == 'positions') {  //POSITIONS
 if (filterValues['positions'].length !== 9)
     columnFilters.push(`(spelling.position LIKE '%${filter}%')`);        

} else if (column == 'time') {  //TIME
 if (filterValues['time'].length != 17)
   if(filter != '')
     columnFilters.push(`(document.time LIKE '%${filter}%' AND document.time NOT LIKE '%${filter}I%' AND document.time NOT LIKE '%${filter}II%')`);

} else if (column == 'locations') {  //LOCATIONS
 if (filterValues['locations'].length != 16)
     columnFilters.push(`(document.location LIKE '%${filter}%')`);

} else if (spellingNoResultFlag && documentNoResultFlag) {
 if (filter.includes("to")) {
   let range = filter.split(" to ");
   let start = isNumeric(range[0]) ? range[0] : `'${range[0]}'`;
   let end = isNumeric(range[1]) ? range[1] : `'${range[1]}'`;
   columnFilters.push(`(spelling.${column} >= ${start} AND spelling.${column} <= ${end})`);
 } else if (isNumeric(filter)) {
   columnFilters.push(`spelling.${column} = ${filter}`);
 } else {
   columnFilters.push(`spelling.${column} = '${filter}'`);
 }
 
}

});

if (columnFilters.length > 0) {
if (query === "WHERE ((") {
 query += columnFilters.join(" OR ");
} else {
 query += `) AND (${columnFilters.join(" OR ")}`;
}
}
});

query += "))";



 if(query == "WHERE (())"){
   query = "";
 }
};

function romanToNumber(roman) {
const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
let result = 0
for (let i = 0; i < roman.length; i++) {
 if (romanMap[roman[i]] < romanMap[roman[i+1]]) {
   result -= romanMap[roman[i]]
 } else {
   result += romanMap[roman[i]]
 }
}
return result
}
