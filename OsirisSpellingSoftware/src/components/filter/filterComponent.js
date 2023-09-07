'use strict';
import { apiUrl } from '/src/script.js';
import { handleAllClick} from '/src/components/filter/filterFunctions/selectBtns.js';
import {filterFormManager} from "/src/components/filter/filterFunctions/formManager.js";
import { filterValues,addDocumentToArray,addLocationToArray, addPositionToArray, addSpellingTypeToArray, addTimeToArray, updateUnknownBtn  } from "/src/components/filter/filterFunctions/updateArrays.js";
import { buildSQL, query } from '/src/components/filter/filterFunctions/filterSubmit.js';
import { showFilter } from "/src/components/queries/filter.js";
export {getQuery}

$(document).on('click', '.individualBtn', function(event) {
  event.preventDefault();

  let element = event.currentTarget;
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
  // timeBtnSelector($(this));

  if (element.classList.contains("spelling")) {
    addSpellingTypeToArray();
  } else if (element.classList.contains("document")) {
    addDocumentToArray();
  } else if (element.classList.contains("position")) {
    addPositionToArray();
  } else if (element.classList.contains("location")) {
    addLocationToArray();
  } else if (element.classList.contains("time")) {
    addTimeToArray();
  }
});






  $('.all').on('click',  function(e) {
    handleAllClick(e, filterValues.spellings, filterValues.documents, filterValues.positions, filterValues.locations, filterValues.time)
  });

  //FILTER SUBMITION
  

  $(document).on('click', '.submit-filter', function (e) {
    
    $('#mainContainer').load('/src/components/views/home/home.html', () => {});
    e.preventDefault()
    addDocumentToArray()
    addLocationToArray()
    addPositionToArray()
    addSpellingTypeToArray()
    addTimeToArray()
    updateUnknownBtn()
    buildSQL()
    
    $(".searchContainer.searchFilter").toggleClass("showFilter hideFilter");
    setTimeout(() => {
      showFilter(query)
    }, 500);
  });
function getQuery(){
  return query;
}
  

$(() => {
    filterFormManager(filterValues.volume, $("#volume-form-container"), $("#volume"), $("#volume-range"), $("#volume-range-btn"), $("#volume-range-start"), $("#volume-range-start option"), $("#volume-range-end"), $("#volume-range-end option"), $("#add-volume"), "Vol: ");
    filterFormManager(filterValues.page, $("#page-form-container"), $("#page"), $("#page-range"), $("#page-range-btn"), $("#page-range-start"), $("#page-range-start option"), $("#page-range-end"), $("#page-range-end option"), $("#add-page"), "Page: ");
    filterFormManager(filterValues.section, $("#section-form-container"), $("#section"), $("#section-range"), $("#section-range-btn"), $("#section-range-start"), $("#section-range-start option"), $("#section-range-end"), $("#section-range-end option"), $("#add-section"), "Section: ");
    filterFormManager(filterValues.pyr_page, $("#pyr-page-form-container"), $("#pyr-page"), $("#pyr-page-range"), $("#pyr-page-range-btn"), $("#pyr-page-range-start"), $("#pyr-page-range-start option"), $("#pyr-page-range-end"), $("#pyr-page-range-end option"), $("#add-pyr-page"), "Pyr-page: ");
    filterFormManager(filterValues.pyr_section, $("#pyr-section-form-container"), $("#pyr-section"), $("#pyr-section-range"), $("#pyr-section-range-btn"), $("#pyr-section-range-start"), $("#pyr-section-range-start option"), $("#pyr-section-range-end"), $("#pyr-section-range-end option"), $("#add-pyr-section"), "Pyr-section: ");
    
    $(".mostrar-array").click(function(e) {
      e.preventDefault()
  
  })


    filterFormManager(filterValues.spells, $("#spell-form-container"), $("#spell"), $("#spell-range"), $("#spell-range-btn"), $("#spell-range-start"), $("#spell-range-start option"), $("#spell-range-end"), $("#spell-range-end option"), $("#add-spell"), "Spell: ");
        
//AJAX
//spellings       
  $.ajax({
        url: apiUrl+'?showSpellingTypes',
        type: 'GET',
        async: true,
        success: (spellingTypes) => {
          for (const spellingType of spellingTypes) {
            let img = spellingType.code.replace(/:/g, '_').replace(/\*/g, '-');
            $('#spelling-btns').append(`<div class="check spelling active individualBtn" data-code="${spellingType.code}"  data-group="${spellingType.spelling_group}" data-disposition="${spellingType.disposition}" data-length="${spellingType.length}"><img src="/src/assets/MdC/${img}.png" alt="${img}"></div>`); //<br>${spellingType.code}
          }
        },
        error: (error) => {
          $('#spelling-btns').html('');
          $('#spelling-btns').append('<p>ERROR</p>');
        },
  });

  //documents
  $.ajax({
    url: apiUrl+'?showDocuments',
    type: 'GET',
    async: true,
    success: (documents) => {
      for (const document of documents) {
        $('#document-btns').append(`<div class="check document active individualBtn" data-code="${document.code}"  data-time="${document.time}" data-location="${document.location}" data-type="${document.type}">${document.code}</div>`);
      }
    },
    error: (error) => {
      $('#document-btns').html('');
      $('#document-btns').append('<p>ERROR</p>');
    },
  });

})





  // filter button click event
  $(".spelling-selector").on("change", function() {
    let groupFilter = $("#spelling-group").val();
    let dispositionFilter = $("#disposition").val();
    let lengthFilter = $("#length").val();
    let filters = [groupFilter, dispositionFilter, lengthFilter];

    // reset all filters to "all"
    $(".spelling-selector").val("all");

    // toggle active class based on selected filters
    $(".check.spelling").each(function() {
      let spellingGroup = $(this).data("group").split("-");
      let disposition = $(this).data("disposition").split("-");
      let length = $(this).data("length");

      if (
        (filters[0] == "all" || $.inArray(filters[0], spellingGroup) >= 0) &&
        (filters[1] == "all" || $.inArray(filters[1], disposition) >= 0) &&
        (filters[2] == "all" || filters[2] == length)
      ) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
    addSpellingTypeToArray(filterValues.spellings)
  });






// filter button click event
$(".document-selector").on("change", function() {
  let typeFilter = $("#document-type").val();

  // toggle active class based on selected filters
  $(".check.document").each(function() {
    let type = $(this).data("type");

    if (typeFilter === "all" || type === typeFilter) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});


