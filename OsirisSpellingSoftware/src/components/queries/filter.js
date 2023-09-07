'use strict'
import { apiUrl } from '/src/script.js';
import Data from "/src/components/charts/data.js";
export { showFilter }
import {showCharts} from "/src/components/charts/charts.js";

function showFilter(query) {
    let data  = {
        spelling: {
          MdC: [],
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
                "Mentuhotep-II": 0,
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

    //loading
    $('#table-results').html(`<img class="spinner" src="/src/assets/utils/spinner-table.gif" alt="loading">`); 
    $('#charts-results').html(`<img class="spinner" src="/src/assets/utils/spinner-chart.gif" alt="loading">`);

    $.ajax({
        url: apiUrl,
        type: 'POST',
        data: { filter: query },
        async: true,
        success: (spellings) => {
            $('#table-results').html("");
            $('#table-results').append(`
      <table id="dataTable" class="display" style="width:100%">
            <thead>
                <tr>
                    <th class="tcode"></th>
                    <th class="tspelling">Spelling</th>
                    <th class="tspelling">Context</th>
                    <th class="tspell collapse-table-smartphone">Spell</th>
                    <th class="tspell collapse-table-desktop">Book</th>
                    <th class="tspell collapse-table-desktop">Spell</th>
                    <th class="tdocument">Document</th>
                    <th class="tdocument collapse-table-desktop">Type</th>
                    <th class="tdocument">Position</th>
                    <th class="tcontext collapse-table-desktop">Time</th>
                    <th class="tcontext collapse-table-desktop">Location</th>
                </tr>
            </thead>
            <tbody>
        `);

            for (const spelling of spellings) {
                //insert in data array          
                Data.processAjaxData(spelling, data);

                let img = spelling.spelling.MdC.replace(/:/g, '_').replace(/\*/g, '-');
                let locution = ""
                if(spelling.spelling.is_locution == 0)
                    locution = "god";
                else
                    locution = "wsir NN pn/tn";
                  
                $('#dataTable tbody').append(`
            <tr class="spelling-row" data-code="${spelling.id}" onclick="showData(this.getAttribute('data-code'))">
                <td	class="tcode">${spelling.reference.code}</td>
                <td	class="tspelling"><img src="/src/assets/MdC/${img}.png" alt="${img}"><br>${spelling.spelling.MdC}</td>
                <td	class="tspelling">${locution}</td>
                <td	class="tspell collapse-table-smartphone">${spelling.spell.book} ${spelling.spell.spell}</td>
                <td	class="tspell collapse-table-desktop">${spelling.spell.book}</td>
                <td	class="tspell collapse-table-desktop">${spelling.spell.spell}</td>
                <td	class="tdocument">${spelling.document.document}</td>
                <td	class="tdocument collapse-table-desktop">${spelling.document.type}</td>
                <td	class="tdocument">${spelling.document.position}</td>
                <td	class="tcontext collapse-table-desktop">${spelling.context.time}</td>
                <td	class="tcontext collapse-table-desktop">${spelling.context.location}</td>
            </tr>
            `);
            }

            $('#table-results').append(`
          </tbody>
      </table>
      `);

            //DATA-TABLE
            let table = $('#dataTable').DataTable({
                paging: true,
                responsive: true,
                lengthMenu: [[25, 50, 100, -1], [25, 50, 100, "All"]],
                pageLength: 25,
                dom: 'Blfrtip',
                buttons: [
                    { extend: 'print', className: 'printButton' },
                    { extend: 'excel', className: 'excelButton' }
                ],
                search: {
                    "regex": true,
                    "smart": false 
                  }
            });

  
        // CHARTS
        $('#charts-results').html("");
        $('#charts-results').load('/src/components/charts/charts.html', () => {
            showCharts(data)
          });
        },
        
        error: (error) => {
            $('#table-results').html(`<img class="error-page" src="/src/assets/images/errorPage.png" alt="error page">`)
            $('#charts-results').html(`<img class="error-page" src="/src/assets/images/errorPage.png" alt="error page">`)
        }
    })

}