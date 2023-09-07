"use strict";

export { filterFormManager };

function filterFormManager(
  filter,
  elementFormContainer,
  element,
  elementRange,
  elementRangeBtn,
  elementRangeStart,
  elementRangeStartOption,
  elementRangeEnd,
  elementRangeEndOption,
  addElement,
  elementName
) {
  // FILTER FORM
  // Element by element/range selector

  
  elementFormContainer.append(`<div class='add-elements-container'></div>`);
  $(".add-elements-container").hide()




  let elementFlag = true;

  if (
    typeof elementRange !== "undefined" &&
    typeof elementRangeBtn !== "undefined" &&
    typeof elementRangeStart !== "undefined" &&
    typeof elementRangeEnd !== "undefined" &&
    typeof addElement !== "undefined"
  ) {
    elementRange.hide();

    elementRangeBtn.change((event) => {
      event.preventDefault();
      elementRange.toggle();
      element.toggle();
      if (elementFlag) {
        elementRangeBtn.text("Select by element");
        elementFlag = false;
      } else {
        elementRangeBtn.text("Select by range");
        elementFlag = true;
      }
    });

    // In case of book
    if (elementName == "Spell: ") {
      $("#spell-form-container").hide();
      $("#flexSwitchCheckSpell").on("change", function () {
        if (this.checked) {
          $("#spell-form-container").show();
          $(".pt-ct-btn").hide();
        } else {
          $("#spell-form-container").hide();
          $(".pt-ct-btn").show();
        }
      });
    }

    if (elementRange.is("select")) {
      // If it is a selection
      // Disable options in element-range-start that are greater than element-range-end
      elementRangeStart.on("change", function () {
        let startVal = $(this).val();
        elementRangeEnd.each(function () {
          if ($(this).val() <= startVal) {
            $(this).prop("disabled", true);
          } else {
            $(this).prop("disabled", false);
          }
        });
      });

      // Disable options in element-range-end that are less than element-range-start
      elementRangeStart.on("click", function () {
        let startVal = $(this).val();
        elementRangeEndOption.each(function () {
          if ($(this).val() <= startVal) {
            $(this).prop("disabled", true);
          } else {
            $(this).prop("disabled", false);
          }
        });
        // Select the first option in element-range-end that is greater than startVal
        elementRangeEnd.val(
          elementRangeEndOption.filter(":not(:disabled):first").val()
        );
        elementRangeEnd.prop("disabled", false);
      });
    }

    // Disable options in volume-range-end that are less than volume-range-start
    elementRangeEnd.on("change", function () {
      let endVal = $(this).val();
      elementRangeStartOption.each(function () {
        if ($(this).val() >= endVal) {
          $(this).prop("disabled", true);
        } else {
          $(this).prop("disabled", false);
        }
      });
    });
    

    // Add element
    addElement.click((event) => {
      event.preventDefault();
      elementFormContainer.find(".add-elements-container").show()

      let filterElement = "";
      let elem = element.val();
      let rangeStart = "";
      let rangeEnd = "";

      if (elementFlag) {
        filterElement = elem;
      } else {
        rangeStart = elementRangeStart.val();
        rangeEnd = elementRangeEnd.val();
        filterElement = `${rangeStart} to ${rangeEnd}`;
      }

      // Check filter
      if (
        filterElement === "" ||
        filterElement === `${elementName} ` ||
        filterElement === `${elementName}  to ` ||
        filterElement === `${elementName} ${rangeStart} to ` ||
        filterElement === `${elementName}  to ${rangeEnd}`
      ) {
        alert("Please choose something");
      } else if (rangeStart >= rangeEnd && !elementFlag) {
        // If the second value is higher
        alert("Range end must be greater than range start");
      } else if (elementName === "Spell: ") {
        if ($("#book-selection").val() === "PT") {
          if (
            filterElement.includes("to") &&
            rangeStart > 0 &&
            rangeStart <= 714 &&
            rangeEnd > 1 &&
            rangeEnd <= 714
          ) {
            filterElement = `PT ${filterElement}`;
            checkFilter(filterElement, filter, elementFormContainer, elementName);
          } else if (filterElement > 0 && filterElement <= 714) {
            filterElement = `PT ${filterElement}`;
            checkFilter(filterElement, filter, elementFormContainer, elementName);
          } else {
            alert("Not allowed range");
          }
        } else {
          if (
            filterElement.includes("to") &&
            rangeStart > 0 &&
            rangeStart <= 1185 &&
            rangeEnd > 1 &&
            rangeEnd <= 1185
          ) {
            filterElement = `CT ${filterElement}`;
            checkFilter(filterElement, filter, elementFormContainer, elementName);
          } else if (filterElement > 0 && filterElement <= 1185) {
            filterElement = `CT ${filterElement}`;
            checkFilter(filterElement, filter, elementFormContainer, elementName);
          } else {
            alert("Not allowed range");
          }
        }
      } else {
        checkFilter(filterElement, filter, elementFormContainer, elementName);
      }
    });
  }
}

function checkFilter(filterElement, array, elementFormContainer, elementName) {
    let flag = true;
    if (filterElement !== "") {
      if (typeof array !== "undefined") {
        if (array.length === 0) {
          array.push(filterElement);
        } else if (array.includes(filterElement)) {
          alert("Duplicated element");
          flag = false;
        } else {
          array.push(filterElement);
        }
      }
    }
    if (flag) {
      if (typeof elementFormContainer !== "undefined") {
        elementFormContainer.find(".add-elements-container").append(
          `<div class='added-to-filter'>${elementName} ${filterElement} <button class='remove-from-filter'>X</button></div>`
        );
  
        // Remove single elements
        elementFormContainer.find(".added-to-filter .remove-from-filter").click(function () {
          let filterElementRm = $(this)
            .parent()
            .text()
            .replace(" X", "")
            .replace(`${elementName} `, "");
          var index = array.indexOf(filterElementRm);
          if (index !== -1) {
            array.splice(index, 1);
          }
          $(this).parent().remove();

           // Check if there are no more elementFormContainer
           if (elementFormContainer.find(".add-elements-container .added-to-filter").length === 0) {
             elementFormContainer.find(".add-elements-container").hide()
           }
        });
      }
    }
  }
  
