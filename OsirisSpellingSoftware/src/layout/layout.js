'use strict'
import data from "/src/components/charts/data.js";
import { showReference } from "/src/components/queries/reference.js";
import { showAll } from "/src/components/queries/showAll.js";
import { loadSpellings } from "/src/components/views/spellings/script.js";


$(() => {
  //main Container Init
  $('#mainContainer').load('/src/components/views/home/home.html', () => {});
  //NAVBAR
  $('#navbar').load('/src/layout/navBar.html', () =>{
    //navbar funcitionalities
    $('.accordion-button').click(function() {
      $(this).toggleClass('active');
      $(this).next('.accordion-content').slideToggle();
    });
    
    $("button.collapse-nav-smartphone").click(() => {
      $(".searchContainer.searchNav").toggleClass("showNav hideNav");
      $(".searchContainer.searchReference").removeClass("show");
      $(".searchContainer.searchReference").addClass("hide");
      $(".searchContainer.searchFilter").removeClass("showFilter");
      $(".searchContainer.searchFilter").addClass("hideFilter");
      activateNavButtons() 
    });
    activateNavButtons()  
    
  })

  function activateNavButtons() {
    //NAVBAR BUTTONS
    $('.home-nav-btn, #showAll').click(() => {
      removeNavPannel()
      showLoadingSpinner();
      $('#mainContainer').load('/src/components/views/home/home.html', () => {});
    });
    $('#showAll').click(() => {
      removeNavPannel()
      $('#mainContainer').load('/src/components/views/home/home.html', () => {});
    });
    $('.project-nav-btn').click(() => {
      removeNavPannel()
      showLoadingSpinner();
      $('#mainContainer').load('/src/components/views/project/project.html', () => {});
    });
    $('.spelling-nav-btn').click(() => {
      removeNavPannel()
      showLoadingSpinner();
      $('#mainContainer').load('/src/components/views/spellings/spellings.html', () => {
        loadSpellings();
      });
    });
    $('.locations-nav-btn').click(() => {
      removeNavPannel()
      showLoadingSpinner();
      $('#mainContainer').load('/src/components/views/locations/locations.html', () => {});
    });
    $('.sources-nav-btn').click(() => {
      removeNavPannel()
      showLoadingSpinner();
      $('#mainContainer').load('/src/components/views/sources/sources.html', () => {});
    });
  }
  function removeNavPannel(){
    $(".searchContainer.searchNav").removeClass("showNav");
    $(".searchContainer.searchNav").addClass("hideNav");
  }
  function showLoadingSpinner() {
    $('#mainContainer').html('<div class="loading-nav"><img class="spinner" src="/src/assets/utils/spinner-table.gif" alt="loading"><div>');
  }
  
  //NAVBAR COLLAPSE
  $('.searchContainer.searchNav').load('/src/components/nav-collapse/nav-collapse.html', () => {

  });

 


  //SHOW ALL
  $("#showAll").click(() => {
    $(".searchContainer.searchNav").removeClass("showNav");
    $(".searchContainer.searchNav").addClass("hideNav");
    $(".searchContainer.searchFilter").removeClass("showFilter");
    $(".searchContainer.searchFilter").addClass("hideFilter");
    $(".searchContainer.searchReference").removeClass("show");
    $(".searchContainer.searchReference").addClass("hide");
    $(".searchContainer.searchNav").removeClass("showNav");
    $(".searchContainer.searchNav").addClass("hideNav");
    setTimeout(() => {
      showAll();
    }, 500);
        
  })
  //SEARCH BY REFERENCE
  $('.searchContainer.searchReference').load('/src/components/searchByReference/searchByReference.html', () => {
    $("#submit-reference").click(() => {
        $('#mainContainer').load('/src/components/views/home/home.html', () => {
          setTimeout(() => {
            $(".searchContainer.searchReference").toggleClass("show hide");
            let reference = $("#referenceInput").val()
            showReference(reference);
          }, 500);
        });

    });
  });

  //SEARCH BY FILTER (in filterComponent.js)
  $('.searchContainer.searchFilter').load('/src/components/filter/filterComponent.html', () => {
    
  });

  //HOVER BUTTONS
  $('#buttons button').hover(
    function() {
      $(this).find('img').attr('src', function(index, oldSrc) {
        return oldSrc.replace('-green.png', '-white.png');
      });
    },
    function() {
      $(this).find('img').attr('src', function(index, oldSrc) {
        return oldSrc.replace('-white.png', '-green.png');
      });
    }
  );


  $(".searchReferenceBtn").click(() => {
    $(".searchContainer.searchReference").toggleClass("show hide");
    $(".searchContainer.searchFilter").removeClass("showFilter");
    $(".searchContainer.searchFilter").addClass("hideFilter");
    $(".searchContainer.searchNav").removeClass("showNav");
    $(".searchContainer.searchNav").addClass("hideNav");
  });

  $(".searchFilterBtn").click(() => {
    $(".searchContainer.searchFilter").toggleClass("showFilter hideFilter");
    $(".searchContainer.searchReference").removeClass("show");
    $(".searchContainer.searchReference").addClass("hide");
    $(".searchContainer.searchNav").removeClass("showNav");
    $(".searchContainer.searchNav").addClass("hideNav");
  });


});







