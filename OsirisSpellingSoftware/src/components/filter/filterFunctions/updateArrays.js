'use strict';
export { filterValues, addDocumentToArray, addLocationToArray, addPositionToArray, addSpellingTypeToArray, addTimeToArray, addLocutionToArray, updateUnknownBtn };
let filterValues = {
    volume: [],
    page: [],
    section: [],
    pyr_page: [],
    pyr_section: [],
    locution: [true, true],
    book: [true, true],
    spells: [],
    spellings: [],
    documents: [],
    positions: [],
    time: [],
    locations: []
  };

  //TIMELINE
         


    function addTimeToArray() {
      filterValues.time = [];
      let timeCheckboxes = document.querySelectorAll('.check.time');
      for (let i = 0; i < timeCheckboxes.length; i++) {
        if (timeCheckboxes[i].classList.contains('active')) {
          let timeCode = timeCheckboxes[i].value;
          filterValues.time.push(timeCode);
        }
      }
      }
      
  

//UPDATE ARRAY
function addSpellingTypeToArray() {
  filterValues.spellings = [];
  let spellingCheckboxes = document.querySelectorAll('.check.spelling');
  for (let i = 0; i < spellingCheckboxes.length; i++) {
    if (spellingCheckboxes[i].classList.contains('active')) {
      let spellingCode = spellingCheckboxes[i].dataset.code;
      filterValues.spellings.push(spellingCode);
    }
  }
}
function addDocumentToArray() {
    filterValues.documents= [];
  let documentsCheckboxes = document.querySelectorAll('.check.document');
  for (let i = 0; i < documentsCheckboxes.length; i++) {
    if (documentsCheckboxes[i].classList.contains('active')) {
      let documentCode = documentsCheckboxes[i].dataset.code;
      filterValues.documents.push(documentCode);
    }
  }
}
function addPositionToArray() {
  filterValues.positions = [];
  let positionsCheckboxes = document.querySelectorAll('.check.position');
  for (let i = 0; i < positionsCheckboxes.length; i++) {
    if (positionsCheckboxes[i].classList.contains('active')) {
      let positionCode = positionsCheckboxes[i].value;
      filterValues.positions.push(positionCode);
    }
  }
}


function addLocationToArray() {
    filterValues.locations = []; 
    let locationsCheckboxes = document.querySelectorAll('.check.location');
    for (let i = 0; i < locationsCheckboxes.length; i++) {
      if (locationsCheckboxes[i].classList.contains('active')) {
        let locationCode = locationsCheckboxes[i].value;
        filterValues.locations.push(locationCode); 
      }
    }
  }
  
  $('.locution, .god, .pt, .ct, .unknown-btn').click(function(e) {
    e.preventDefault()
    if ($(this).hasClass('locution')) {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            filterValues.locution[0] = true
        } else {
            filterValues.locution[0] = false
        }
    } else if ($(this).hasClass('god')) {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            filterValues.locution[1] = true
        } else {
            filterValues.locution[1] = false
        }
    } else if ($(this).hasClass('pt')) {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            filterValues.book[0] = true
        } else {
            filterValues.book[0] = false
        }
    } else if ($(this).hasClass('ct')) {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            filterValues.book[1] = true
        } else {
            filterValues.book[1] = false
        }
    } else if ($(this).hasClass('unknown-btn')) {
      $(this).toggleClass('active');
  }
  });

  function updateUnknownBtn(){
    if ($('.unknown-btn').hasClass('active')) {
      filterValues.time.push('?')
    } else {
      filterValues.time = filterValues.time.filter(item => !item.includes('?'));
    }
  }
  

  function addLocutionToArray(bool1, bool2) {
    filterValues.locution[0] = bool1
    filterValues.locution[1] = bool2
  }