'use strict';
export { handleAllClick};
// export {timeBtnSelector}
import {filterValues, addDocumentToArray, addLocationToArray, addPositionToArray, addSpellingTypeToArray, addTimeToArray } from "/src/components/filter/filterFunctions/updateArrays.js";


function handleAllClick(e) {
    e.preventDefault();
    let buttonClass = $(e.target).attr("class");
    if (buttonClass.includes("spelling")) {
      if ($(".check.spelling.active").length == $(".check.spelling").length || $(".check.spelling.active").length == 0) {
        $(".check.spelling").toggleClass("active");
      } else {
        $(".check.spelling").addClass("active");
      }
      addSpellingTypeToArray();
    } else if (buttonClass.includes("document")) {
      if ($(".check.document.active").length == $(".check.document").length || $(".check.document.active").length == 0) {
        $(".check.document").toggleClass("active");
      } else {
        $(".check.document").addClass("active");
      }
      addDocumentToArray();
    } else if (buttonClass.includes("spellingType")) {
      if ($(".check.spellingType.active").length == $(".check.spellingType").length || $(".check.spellingType.active").length == 0) {
        $(".check.spellingType").toggleClass("active");
      } else {
        $(".check.spellingType").addClass("active");
      }
      addPositionToArray();
    } else if (buttonClass.includes("location")) {
      if ($(".check.location.active").length == $(".check.location").length || $(".check.location.active").length == 0) {
        $(".check.location").toggleClass("active");
      } else {
        $(".check.location").addClass("active");
      }
      addLocationToArray();
    } else if (buttonClass.includes("time")) {
      if ($(".check.time.active").length == $(".check.time").length || $(".check.time.active").length == 0) {
        $(".check.time").toggleClass("active");
      } else {
        $(".check.time").addClass("active");
      }
      addTimeToArray();
    } else if (buttonClass.includes("position")) {
      if ($(".check.position.active").length == $(".check.position").length || $(".check.position.active").length == 0) {
        $(".check.position").toggleClass("active");
      } else {
        $(".check.position").addClass("active");
      }
      addPositionToArray();
    }
  }
  
  // function timeBtnSelector(button) {
  //   // Condición 1
  //   if (button.val() === "XI") {
  //     if (button.hasClass("active")) {
  //       $(".check.time[value='end I I.P.'], .check.time[value='Mentuhotep II'], .check.time[value='Mentuhotep III']").addClass("active");
  //     } else {
  //       $(".check.time[value='end I I.P.'], .check.time[value='Mentuhotep II'], .check.time[value='Mentuhotep III']").removeClass("active");
  //     }
  //   };
  
  //   // Condición 2
  //   if (button.val() === "XII") {
  //     if ($(this).hasClass("active")) {
  //       $(".check.time[value='Amenemhat I'], .check.time[value='Senusret I'], .check.time[value='Amenemhat II'], .check.time[value='Senusret II'], .check.time[value='Senusret III'], .check.time[value='Amenemhat III']").addClass("active");
  //     } else {
  //       $(".check.time[value='Amenemhat I'], .check.time[value='Senusret I'], .check.time[value='Amenemhat II'], .check.time[value='Senusret II'], .check.time[value='Senusret III'], .check.time[value='Amenemhat III']").removeClass("active");
  //     }
  //   };
  
  //   // Condición 3
  //   if (button.val() === "XIII") {
  //     if ($(this).hasClass("active")) {
  //       $(".check.time[value='Sewahenre']").addClass("active");
  //     } else {
  //       $(".check.time[value='Sewahenre']").removeClass("active");
  //     }
  //   };
  
  //   // Condición 4
  //   if (button.val() === "I I.P.") {
  //     if ($(this).hasClass("active")) {
  //       $(".check.time[value='end I I.P.'], .check.time[value='XI']").addClass("active");
  //     } else {
  //       $(".check.time[value='end I I.P.'], .check.time[value='XI']").removeClass("active");
  //     }
  //   };
  
  //   // Condición 5
  //   if (button.val() === "MK") {
  //     if ($(this).hasClass("active")) {
  //       $(".check.time[value='Mentuhotep II'], .check.time[value='Mentuhotep III'], .check.time[value='Amenemhat I'], .check.time[value='Senusret I'], .check.time[value='Amenemhat II'], .check.time[value='Senusret II'], .check.time[value='Senusret III'], .check.time[value='Amenemhat III'], .check.time[value='XI'], .check.time[value='XII'], .check.time[value='XIII']").addClass("active");
  //     } else {
  //       $(".check.time[value='Mentuhotep II'], .check.time[value='Mentuhotep III'], .check.time[value='Amenemhat I'], .check.time[value='Senusret I'], .check.time[value='Amenemhat II'], .check.time[value='Senusret II'], .check.time[value='Senusret III'], .check.time[value='Amenemhat III'], .check.time[value='XI'], .check.time[value='XII'], .check.time[value='XIII']").removeClass("active");
  //     }
  //   };
  
  //   // Condición 6
  //   if (button.val() === "II I.P.") {
  //     if ($(this).hasClass("active")) {
  //       $(".check.time[value='Sewahenre'], .check.time[value='XIII']").addClass("active");
  //     } else {
  //       $(".check.time[value='Sewahenre'], .check.time[value='XIII']").removeClass("active");
  //     }
  //   };
  // }
  