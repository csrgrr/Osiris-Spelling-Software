import { apiUrl } from '/src/script.js';

export {loadSpellings}


function loadSpellings(){
$.ajax({
  url: apiUrl+'?showSpellingTypes&spelling_group=eye-throne',
  type: 'GET',
  async: true,
  success: (spellingTypes) => {
    for (const spellingType of spellingTypes) {
      let img = spellingType.code.replace(/:/g, '_').replace(/\*/g, '-');
      $('.eye-throne-container').append(`
      <div class="spelling-info">
      <img src="/src/assets/MdC/${img}.png" alt="${img}">
      <br>
      <p class="spelling-info-data"><strong>MdC: </strong>${spellingType.code}</p>
      <p class="spelling-info-data"><strong>Group: </strong>${spellingType.spelling_group}</p>
      <p class="spelling-info-data"><strong>Disposition: </strong>${spellingType.disposition}</p>
      <p class="spelling-info-data"><strong>Num. of signs: </strong>${spellingType.length}</p>
      </div>`);
    }
  },
  error: (error) => {
    $('.eye-throne-container').html('');
    $('.eye-throne-container').append('<p>ERROR</p>');
  },
});
$.ajax({
  url: apiUrl+'?showSpellingTypes&spelling_group=flesh-mouth',
  type: 'GET',
  async: true,
  success: (spellingTypes) => {
    for (const spellingType of spellingTypes) {
      let img = spellingType.code.replace(/:/g, '_').replace(/\*/g, '-');
      $('.flesh-mouth-container').append(`      
      <div class="spelling-info">
      <img src="/src/assets/MdC/${img}.png" alt="${img}">
      <br>
      <p><strong>MdC: </strong>${spellingType.code}</p>
      <p><strong>Group: </strong>${spellingType.spelling_group}</p>
      <p><strong>Disposition: </strong>${spellingType.disposition}</p>
      <p><strong>Num. of signs: </strong>${spellingType.length}</p>
      </div>`);
    }
  },
  error: (error) => {
    $('.flesh-mouth-container').html('');
    $('.flesh-mouth-container').append('<p>ERROR</p>');
  },
});
$.ajax({
  url: apiUrl+'?showSpellingTypes&spelling_group=others',
  type: 'GET',
  async: true,
  success: (spellingTypes) => {
    for (const spellingType of spellingTypes) {
      let img = spellingType.code.replace(/:/g, '_').replace(/\*/g, '-');
      $('.others-container').append(`
      <div class="spelling-info">
      <img src="/src/assets/MdC/${img}.png" alt="${img}">
      <br>
      <p><strong>MdC: </strong>${spellingType.code}</p>
      <p><strong>Group: </strong>${spellingType.spelling_group}</p>
      <p><strong>Disposition: </strong>${spellingType.disposition}</p>
      <p><strong>Num. of signs: </strong>${spellingType.length}</p>
      </div>`);
    }
  },
  error: (error) => {
    $('.others-container').html('');
    $('.others-container').append('<p>ERROR</p>');
  },
});
}