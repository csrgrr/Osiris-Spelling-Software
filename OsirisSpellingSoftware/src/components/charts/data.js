'use strict';




function processAjaxData(jsonData, datas) {
for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key) && key != "reference") {
        for (const innerKey in jsonData[key]) {
            if (jsonData[key].hasOwnProperty(innerKey) && innerKey != "spellId" && key != "id"){
                if(innerKey === 'MdC'){
                    let str = jsonData[key][innerKey]
                    let results = splitString(str);
                    results.forEach(sign => {
                          insertData(sign, datas[key].signs)
                        });  
                    //insert also in MdC
                    insertData(jsonData[key][innerKey], datas[key][innerKey])
                } else if (innerKey === 'disposition') {
                    const elements = jsonData[key][innerKey].split("-");
                    elements.forEach(element => {
                      insertData(element, datas[key][innerKey])
                    });    

                } else if (innerKey === 'is_locution'){

                    let is_locution = ""
                    if (jsonData[key][innerKey] == 0) 
                            is_locution = "god";
                    else if (jsonData[key][innerKey] == 1) 
                            is_locution = "wsir NN pn/tn";                    
                    insertData(is_locution, datas[key][innerKey])


                } else if (innerKey === 'spell') {
                    const element = `${jsonData[key]["book"]} ${jsonData[key][innerKey]}`;
                    insertData(element, datas[key][innerKey])
                } else if (innerKey === 'time') {
                    insertTime(jsonData[key][innerKey], datas[key][innerKey])

                } else if (innerKey === 'position') {
                    const elements = jsonData[key][innerKey].split("&");
                    elements.forEach(element => {
                        element = element.replace("(E)", "").replace(/\s+/g, "");
                        insertData(element, datas[key][innerKey])
                    });    
                    insertTime(jsonData[key][innerKey], datas[key][innerKey])

                } else {
                    insertData(jsonData[key][innerKey], datas[key][innerKey])
                }
              
            }
        }
    }
  }
    
}


//INSERT

function insertData(jsonDataIndex, dataIndex) {
    if (dataIndex[jsonDataIndex]) 
        dataIndex[jsonDataIndex]++;
    else 
      dataIndex[jsonDataIndex] = 1;    
}
  
// SPLIT MdC
function splitString(str) {
    str = str.replace("-retro", "");

    let words = str.split(/\W+/);
  
    let filteredWords = words.filter(function(word) {
      return word !== "";
    });
  
    return filteredWords;
  }


  function insertTime(str, time) {
    let eraFlag = true;
    let dynastyFlag = true;
    if (str === "?") {
        time.unknown++;
    } else {
        let parts = str.split(/or|end|2nd|1|2|later|beginning|\(|\)|\?|end|d\.|\/|-/);
        for (let i = 0; i < parts.length; i++) {
            parts[i] = parts[i].trim();
            if (parts[i] === '' || parts[i] === ' ') {
                parts.splice(i, 1);
                i--; 
            }
        }

        parts.forEach(part => {
            if (part === "XI") {
                eraFlag = addEra(time.Middle_Kingdom, eraFlag);
                dynastyFlag = addDynasty(time.Middle_Kingdom.XI, dynastyFlag);
            } else if (part === "Mentuhotep II"){
                eraFlag = addEra(time.Middle_Kingdom, eraFlag);
                dynastyFlag = addDynasty(time.Middle_Kingdom.XI, dynastyFlag);
                time.Middle_Kingdom.XI["Mentuhotep-II"]++;
            } else if (part === "Mentuhotep III"){
                eraFlag = addEra(time.Middle_Kingdom, eraFlag);
                dynastyFlag = addDynasty(time.Middle_Kingdom.XI, dynastyFlag);
                time.Middle_Kingdom.XI["Mentuhotep-III"]++;
            } else if (part === "I I.P"){
                eraFlag = addEra(time.I_IP, eraFlag);
                dynastyFlag = addDynasty(time.Middle_Kingdom.XI, dynastyFlag);
            } else if (part === "Amenemhat I"){
                eraFlag = addEra(time.Middle_Kingdom, eraFlag);
                dynastyFlag = addDynasty(time.Middle_Kingdom.XII, dynastyFlag);
                time.Middle_Kingdom.XII["Amenemhat-I"]++;
            } else if (part === "Senusret I"){
                eraFlag = addEra(time.Middle_Kingdom, eraFlag);
                dynastyFlag = addDynasty(time.Middle_Kingdom.XII, dynastyFlag);
                time.Middle_Kingdom.XII["Senusret-I"]++;
            } else if (part === "Amenemhat II"){
                eraFlag = addEra(time.Middle_Kingdom, eraFlag);
                dynastyFlag = addDynasty(time.Middle_Kingdom.XII, dynastyFlag);
                time.Middle_Kingdom.XII["Amenemhat-II"]++;
            } else if (part === "Senusret II"){
                eraFlag = addEra(time.Middle_Kingdom, eraFlag);
                dynastyFlag = addDynasty(time.Middle_Kingdom.XII, dynastyFlag);
                time.Middle_Kingdom.XII["Senusret-II"]++;
            } else if (part === "Senusret III"){
                eraFlag = addEra(time.Middle_Kingdom, eraFlag);
                dynastyFlag = addDynasty(time.Middle_Kingdom.XII, dynastyFlag);
                time.Middle_Kingdom.XII["Senusret-III"]++;
            } else if (part === "Amenemhat III"){
                eraFlag = addEra(time.Middle_Kingdom, eraFlag);
                dynastyFlag = addDynasty(time.Middle_Kingdom.XII, dynastyFlag);
                time.Middle_Kingdom.XII["Amenemhat-III"]++;
            } else if (part === "Sewahenre"){
                eraFlag = addEra(time.II_IP, eraFlag);
                dynastyFlag = addDynasty(time.II_IP.XIII, dynastyFlag);
                time.II_IP.XIII["Sewahenre"]++;
            }
        });
    }
}

function addEra(era, flag){
    if(flag) {
        era.num++;
        flag = false;
    }
    return flag;
}

function addDynasty(dynasty, flag){
    if(flag) {
        dynasty.num++;
        flag = false;
    }
    return flag;
}



export default { processAjaxData};