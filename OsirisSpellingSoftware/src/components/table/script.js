'use strict';
import { apiUrl } from '/src/script.js';

let data = {
    spelling: {
      spelling_group: [],
      signs: [],
      disposition: [],
      length: [],
      is_locution: [],
    },
    spell: {
      book: [],
      spell: [],
    },
    document: {
      document: [],
      type: [],
      position: []
    },
    context: {
      time: {
        I_IP: {
          num: 0
        },
        Middle_Kingdom: {
          num: 0,
          XI: {
            num: 0,
            "Mentuhotep-III": 0
          },
          XII: {
            num: 0,
            "Amenemhat-I": 0,
            "Senusret-I": 0,
            "Amenemhat-II": 0,
            "Senusret-II": 0,
            "Senusret-III": 0,
            "Amenemhat-III": 0,
          }
        },
        II_IP: {    
          num: 0,
          XIII: {
            num: 0,
            Sewahenre: 0
          }
        },
        unknown: 0
        },
      location: []
    }
  };
  
$(()=> {

    //Show all
        $('#resultados').html("");



        // AJAX
        $.ajax({
            url: apiUrl+`?showAll`,
            type: 'GET',
            async: true,
            success: (spellings) => {
            $('#resultados').html("");
            $('#resultados').append(`
            <table id="dataTable" class="display">
                <thead>
                    <tr>
                        <th class="tcode"></th>
                        <th class="tspelling">Spelling</th>
                        <th class="tspelling">Context</th>
                        <th class="tspell">Book</th>
                        <th class="tspell">Spell</th>
                        <th class="tdocument">Document</th>
                        <th class="tdocument">Type</th>
                        <th class="tdocument">Position</th>
                        <th class="tcontext">Time</th>
                        <th class="tcontext">Location</th>
                    </tr>
                </thead>
                <tbody>
            `);
                
            for (const spelling of spellings) {
                let img = spelling.spelling.MdC.replace(/:/g, '_').replace(/\*/g, '-');
                let locution = (spelling.spelling.is_locution == 0) ? "god" : "wsir NN pn/tn";
                  
                $('#dataTable tbody').append(`
                <tr class="spelling-row" data-code="${spelling.id}" onclick="showData(this.getAttribute('data-code'))">
                    <td	class="tcode">${spelling.reference.code}</td>
                    <td	class="tspelling"><img src="../assets/MdC/${img}.png" alt="${img}"><br>${spelling.spelling.MdC}</td>
                    <td	class="tspelling">${locution}</td>
                    <td	class="tspell">${spelling.spell.book}</td>
                    <td	class="tspell">${spelling.spell.spell}</td>
                    <td	class="tdocument">${spelling.document.document}</td>
                    <td	class="tdocument">${spelling.document.type}</td>
                    <td	class="tdocument">${spelling.document.position}</td>
                    <td	class="tcontext">${spelling.context.time}</td>
                    <td	class="tcontext">${spelling.context.location}</td>
                </tr>
                `);
            }
        
            $('#resultados').append(`
                </tbody>
            </table>
            `);
        
            let table = $('#dataTable').DataTable({
             paging: true,
             lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
             pageLength: 10,
                dom: 'Blfrtip', 
                buttons: [
                    { extend: 'print', className: 'printButton' },
                    { extend: 'excel', className: 'excelButton' }
                ]
            });
        },

            
            error: (error) => {
                $('#resultados').html = "";
                $('#resultados').append(`<p> ERROR </p>`)
            }
        })
        // FIN AJAX-----------------------------





    
});

//################################################################################################


$(()=> {
    // $('#resultados').hide()

    //Show all
    $("#showAll").click((event) => {
        event.preventDefault(); 
        $('#resultados').html("");
        $.ajax({
            url: apiUrl+`?showAll`,
            type: 'GET',
            async: true,
            success: (spellings) => {
            $('#resultados').html("");
            $('#resultados').append(`
            <table id="dataTable" class="display" style="width:100%">
                <thead>
                    <tr>
                        <th class="tcode"></th>
                        <th class="tspelling">Spelling</th>
                        <th class="tspelling">Context</th>
                        <th class="tspell">Book</th>
                        <th class="tspell">Spell</th>
                        <th class="tdocument">Document</th>
                        <th class="tdocument">Type</th>
                        <th class="tdocument">Position</th>
                        <th class="tcontext">Time</th>
                        <th class="tcontext">Location</th>
                    </tr>
                </thead>
                <tbody>
            `);
                
            for (const spelling of spellings) {
                let img = spelling.spelling.MdC.replace(/:/g, '_').replace(/\*/g, '-');
                let locution = (spelling.spelling.is_locution == 0) ? "god" : "wsir NN pn/tn";
                  
                $('#dataTable tbody').append(`
                <tr class="spelling-row" data-code="${spelling.id}">
                    <td	class="tcode">${spelling.reference.code}</td>
                    <td	class="tspelling"><img src="../assets/MdC/${img}.png" alt="${img}"><br>${spelling.spelling.MdC}</td>
                    <td	class="tspelling">${locution}</td>
                    <td	class="tspell">${spelling.spell.book}</td>
                    <td	class="tspell">${spelling.spell.spell}</td>
                    <td	class="tdocument">${spelling.document.document}</td>
                    <td	class="tdocument">${spelling.document.type}</td>
                    <td	class="tdocument">${spelling.document.position}</td>
                    <td	class="tcontext">${spelling.context.time}</td>
                    <td	class="tcontext">${spelling.context.location}</td>
                </tr>
                `);
                 // Procesar los datos obtenidos
                 processAjaxData(spelling);
            }
        
            $('#resultados').append(`
                </tbody>
            </table>
            `);
        
            // Aplicar DataTables a la tabla con ID "dataTable"
            $('#dataTable').DataTable();

             
        },
            error: (error) => {
                $('#resultados').html = "";
                $('#resultados').append(`<p> ERROR </p>`)
            }
        })
        $('#resultados').show()
    })


    //Show by reference
    $("#referenceBtn").click((event) => {
        event.preventDefault(); 
        $('#resultados').html("");
        let text = $('#reference').val()//"CT VIII 414 (Pyr. 1973 a)";
        let url = encodeURIComponent(text); //CT%20VIII%20414%20(Pyr.%201973%20a)
        $.ajax({
            url: apiUrl+`?quickSearch=${url}`,
            type: 'GET',
            async: true,
            success: (spellings) => {
            $('#resultados').html("");
            $('#resultados').append(`
            <table id="dataTable" class="display" style="width:100%">
                <thead>
                    <tr>
                        <th class="tcode"></th>
                        <th class="tspelling">Spelling</th>
                        <th class="tspelling">Context</th>
                        <th class="tspell">Book</th>
                        <th class="tspell">Spell</th>
                        <th class="tdocument">Document</th>
                        <th class="tdocument">Type</th>
                        <th class="tdocument">Position</th>
                        <th class="tcontext">Time</th>
                        <th class="tcontext">Location</th>
                    </tr>
                </thead>
                <tbody>
            `);
                
            for (const spelling of spellings) {
                let img = spelling.spelling.MdC.replace(/:/g, '_').replace(/\*/g, '-');
                let locution = (spelling.spelling.is_locution == 0) ? "god" : "wsir NN pn/tn";
                  
                $('#dataTable tbody').append(`
                <tr class="spelling-row" data-code="${spelling.id}">
                    <td	class="tcode">${spelling.reference.code}</td>
                    <td	class="tspelling"><img src="../assets/MdC/${img}.png" alt="${img}"><br>${spelling.spelling.MdC}</td>
                    <td	class="tspelling">${locution}</td>
                    <td	class="tspell">${spelling.spell.book}</td>
                    <td	class="tspell">${spelling.spell.spell}</td>
                    <td	class="tdocument">${spelling.document.document}</td>
                    <td	class="tdocument">${spelling.document.type}</td>
                    <td	class="tdocument">${spelling.document.position}</td>
                    <td	class="tcontext">${spelling.context.time}</td>
                    <td	class="tcontext">${spelling.context.location}</td>
                </tr>
                `);
            }
        
            $('#resultados').append(`
                </tbody>
            </table>
            `);
        
            // Aplicar DataTables a la tabla con ID "dataTable"
            $('#dataTable').DataTable();
        },
            error: (error) => {
                $('#resultados').html = "";
                $('#resultados').append(`<p> ERROR </p>`)
            }
        })
        $('#resultados').show()
    })

    //Show by filter
    $("#filterBtn").click((event) => {
      event.preventDefault();
      $('#resultados').html("");
      let text = $('#filter').val();
      $.ajax({
        url: apiUrl,
        type: 'POST',
        data: {filter: text},
        async: true,
        success: (spellings) => {
            $('#resultados').html("");
            $('#resultados').append(`
            <table id="dataTable" class="display" style="width:100%">
                <thead>
                    <tr>
                        <th class="tcode"></th>
                        <th class="tspelling">Spelling</th>
                        <th class="tspelling">Context</th>
                        <th class="tspell">Book</th>
                        <th class="tspell">Spell</th>
                        <th class="tdocument">Document</th>
                        <th class="tdocument">Type</th>
                        <th class="tdocument">Position</th>
                        <th class="tcontext">Time</th>
                        <th class="tcontext">Location</th>
                    </tr>
                </thead>
                <tbody>
            `);
                
            for (const spelling of spellings) {
                let img = spelling.spelling.MdC.replace(/:/g, '_').replace(/\*/g, '-');
                let locution = (spelling.spelling.is_locution == 0) ? "god" : "wsir NN pn/tn";
                  
                $('#dataTable tbody').append(`
                <tr class="spelling-row" data-code="${spelling.id}">
                    <td	class="tcode">${spelling.reference.code}</td>
                    <td	class="tspelling"><img src="../assets/MdC/${img}.png" alt="${img}"><br>${spelling.spelling.MdC}</td>
                    <td	class="tspelling">${locution}</td>
                    <td	class="tspell">${spelling.spell.book}</td>
                    <td	class="tspell">${spelling.spell.spell}</td>
                    <td	class="tdocument">${spelling.document.document}</td>
                    <td	class="tdocument">${spelling.document.type}</td>
                    <td	class="tdocument">${spelling.document.position}</td>
                    <td	class="tcontext">${spelling.context.time}</td>
                    <td	class="tcontext">${spelling.context.location}</td>
                </tr>
                `);
            }
        
            $('#resultados').append(`
                </tbody>
            </table>
            `);
        
            // Aplicar DataTables a la tabla con ID "dataTable"
            $('#dataTable').DataTable();
        },
        error: (error) => {
          $('#resultados').html = "";
          $('#resultados').append(`<p> ERROR </p>`)
        }
      })
      $('#resultados').show()
    })



    

    
})

let flag = true
function processAjaxData(jsonData) {
    if(flag){ // borrar al terminar
//imprime los valores del array por orden
for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key) && key != "reference") {
        for (const innerKey in jsonData[key]) {
            if (jsonData[key].hasOwnProperty(innerKey) && innerKey != "spellId") {
                if(innerKey === 'MdC'){
                    let str = jsonData[key][innerKey]
                    let results = splitString(str);
                    results.forEach(sign => {
                          insertData(sign, data[key].signs)
                        });  

                } else if (innerKey === 'disposition') {
                    const elements = jsonData[key][innerKey].split("-");
                    elements.forEach(element => {
                      insertData(element, data[key][innerKey])
                    });    

                } else if (innerKey === 'is_locution'){
                    let is_locution = ""
                    switch (jsonData[key][innerKey]) {
                        case 0:
                            is_locution = "god" 
                            break;
                        case 1:
                            is_locution = "wsir NN pn/tn" 
                            break;
                        default:
                            break;
                    }
                    insertData(is_locution, data[key][innerKey], data)

                } else if (innerKey === 'time') {

                    insertTime(jsonData[key][innerKey], data[key][innerKey])

                } else if (innerKey === 'position') {
                    const elements = jsonData[key][innerKey].split("&");
                    elements.forEach(element => {
                        element = element.replace("(E)", "").replace(/\s+/g, "");
                        insertData(element, data[key][innerKey])
                    });    
                    insertTime(jsonData[key][innerKey], data[key][innerKey])

                } else {
                    insertData(jsonData[key][innerKey], data[key][innerKey])
                }
              
            }
        }
    }
  }
        // flag = false;
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

  

