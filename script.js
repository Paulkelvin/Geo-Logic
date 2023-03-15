document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector("nav");

    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("show");
    });

    // Get all the navigation links and sections
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("article section");

    // Set the first navigation link as active
    navLinks[0].classList.add("active");

    // Hide all sections
    sections.forEach((section) => {
      section.style.display = "none";
      section.addEventListener("click", (event) => {
        // removes the navbar when the dom is clicked

        const navElement = document.querySelector("nav");

        if (
          navElement.classList.contains("show") &&
          !event.target.classList.contains("hamburger")
        ) {
          navElement.classList.remove("show");
        }
      });
    });

    // Show the first section
    sections[0].style.display = "block";

    const switchInput = document.getElementById("switch");
    const switchOption1 = document.getElementById("switch-option1");
    const switchOption2 = document.getElementById("switch-option2");
    const optionsTable = document.getElementById("options-table");
    const optionsTable2 = document.getElementById("options-table2");
    const tableBtn2 = document.querySelectorAll(".table-btn2");
    const tableBtn = document.querySelectorAll(".table-btn");

    tableBtn2.forEach((tableBtn) => {
      tableBtn.style.display = "block";
    });

    tableBtn.forEach((tableBtn) => {
      tableBtn.style.display = "none";
    });

    // Hide the first table and show the second table on load
    optionsTable.classList.add("hidden");
    optionsTable2.classList.remove("hidden");
    switchOption1.classList.add("hidden");
    switchOption2.classList.remove("hidden");

    if (switchInput) {
      switchInput.addEventListener("change", function () {
        if (this.checked) {
          optionsTable.classList.remove("hidden");
          optionsTable2.classList.add("hidden");
          switchOption1.classList.remove("hidden");
          switchOption2.classList.add("hidden");

          tableBtn2.forEach((tableBtn) => {
            tableBtn.style.display = "none";
          });

          tableBtn.forEach((tableBtn) => {
            tableBtn.style.display = "block";
          });
        } else {
          optionsTable.classList.add("hidden");
          optionsTable2.classList.remove("hidden");
          switchOption1.classList.add("hidden");
          switchOption2.classList.remove("hidden");

          tableBtn2.forEach((tableBtn) => {
            tableBtn.style.display = "block";
          });

          tableBtn.forEach((tableBtn) => {
            tableBtn.style.display = "none";
          });
        }
      });
    }

    // Add event listener to each navigation link
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Remove navigation bar upon clicking navlink
        navbar.classList.remove("show");

        // Remove the 'active' class from all navigation links
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        // Add the 'active' class to the clicked link
        link.classList.add("active");

        // Show the corresponding section
        const targetId = link.getAttribute("href");
        if (targetId) {
          const targetSection = document.querySelector(targetId);
          targetSection.style.display = "block";
        }
      });
    });

    // Get the table and button elements
    const table = document.querySelector("#options-table");
    const addRowBtn = document.querySelector("#add-row-btn");
    const removeRowBtn = document.querySelector("#remove-row-btn");
    const tableBody = document.querySelector("tbody");
    const clearDataButton = document.querySelector("#delete-cell-data");
    const addRowBtn2 = document.querySelector("#add-row-btn2");
    const tableBody2 = document.querySelector("#options-table2 tbody");

    tableBody2.addEventListener("input", function (event) {
      const rows = tableBody2.querySelectorAll("tr");
      const lastRow = rows[rows.length - 1];
      const secondToLastRow = rows[rows.length - 2];

      if (lastRow && secondToLastRow) {
        const lastRowInputs = lastRow.querySelectorAll("input");
        const secondToLastRowInputs = secondToLastRow.querySelectorAll("input");

        const secondToLastEasting = Number(
          secondToLastRowInputs[secondToLastRowInputs.length - 2].value
        );
        const secondToLastNorthing = Number(
          secondToLastRowInputs[secondToLastRowInputs.length - 1].value
        );

        if (secondToLastEasting && secondToLastNorthing) {
          const lastRowDistance = Number(lastRowInputs[2].value);
          const lastRowBearing = Number(lastRowInputs[3].value);

          if (lastRowDistance && lastRowBearing) {
            const bearingRadians = lastRowBearing * (Math.PI / 180);
            const easting =
              secondToLastEasting + lastRowDistance * Math.sin(bearingRadians);
            const northing =
              secondToLastNorthing + lastRowDistance * Math.cos(bearingRadians);

            lastRowInputs[lastRowInputs.length - 2].value = easting.toFixed(2);
            lastRowInputs[lastRowInputs.length - 1].value = northing.toFixed(2);
          }

          if (
            lastRowInputs[lastRowInputs.length - 2].value &&
            lastRowInputs[lastRowInputs.length - 1].value &&
            secondToLastEasting &&
            secondToLastNorthing
          ) {
            const deltaX =
              lastRowInputs[lastRowInputs.length - 2].value -
              secondToLastEasting;
            const deltaY =
              lastRowInputs[lastRowInputs.length - 1].value -
              secondToLastNorthing;

            lastRowInputs[lastRowInputs.length - 4].value = deltaX.toFixed(2);
            lastRowInputs[lastRowInputs.length - 3].value = deltaY.toFixed(2);
          }
        }
      }
    });

    // Keep track of the number of rows
    let rowCount = tableBody2.querySelectorAll("tr").length;

    // Add event listener to the button
    addRowBtn2.addEventListener("click", function () {
      // Create a new row element
      const newRow = document.createElement("tr");
      newRow.className = `row${rowCount}`; // Add a number to the class name

      // Create the first cell element and append it to the new row
      const snCell = document.createElement("td");
      const snInput = document.createElement("input");
      snInput.type = "number";
      snInput.value = rowCount + 1; // Add sequential value to the input
      snInput.disabled = true; // Disable the input so it can't be edited
      snCell.appendChild(snInput);
      newRow.appendChild(snCell);

      // Get the input elements in the first row
      const firstRowInputs = tableBody2
        .querySelector("tr:first-child")
        .querySelectorAll("input");

      // Create 5 cell elements and append them to the new row

      for (let i = 0; i < 5; i++) {
        const newCell = document.createElement("td");
        const newInput = document.createElement("input");
        newInput.type = "number";
        newInput.className = `${firstRowInputs[i].className}${rowCount}`; // Add a number to the class name
        if (i === 2) {
          // if the current input is for bearing
          newInput.type = "text";
          newInput.setAttribute("pattern", "[0-9]{1,7}");
          newInput.setAttribute("maxlength", "7"); // Add maxlength attribute
        }

        newCell.appendChild(newInput);
        newRow.appendChild(newCell);
      }

      // Create two cell elements for the coordinates and append them to the new row
      const eastingCell = document.createElement("td");
      const eastingInput = document.createElement("input");
      eastingInput.type = "number";
      eastingInput.className = `${firstRowInputs[5].className}${rowCount}`; // Add a number to the class name
      eastingCell.appendChild(eastingInput);
      newRow.appendChild(eastingCell);

      const northingCell = document.createElement("td");
      const northingInput = document.createElement("input");
      northingInput.type = "number";
      northingInput.className = `${firstRowInputs[6].className}${rowCount}`; // Add a number to the class name
      northingCell.appendChild(northingInput);
      newRow.appendChild(northingCell);

      // Increment the row count
      rowCount++;

      // Append the new row to the table
      tableBody2.appendChild(newRow);
    });

    // Add a click event listener to the "Add Row" button
    let newRowNum = 2; // Initialize the new row number to 1
    addRowBtn.addEventListener("click", () => {
      // Create a new row element
      const newRow = document.createElement("tr");
      newRow.className = `row${tableBody.querySelectorAll("tr").length}`; // Add a number to the class name

      // Get the input elements in the first row
      const firstRowInputs = tableBody
        .querySelector("tr:first-child")
        .querySelectorAll("input");

      // Get the last row
      const lastRow = tableBody.querySelector("tr:last-child");

      // Get the input elements in the last row
      const lastRowInputs = lastRow.querySelectorAll("input");

      // Create 6 cell elements and append them to the new row
      for (let i = 0; i < 6; i++) {
        const newCell = document.createElement("td");
        const newInput = document.createElement("input");
        newInput.type = "number";
        newInput.className = `${firstRowInputs[i].className}${
          tableBody.querySelectorAll("tr").length
        }`; // Add a number to the class name
        newCell.appendChild(newInput);
        newRow.appendChild(newCell);
      }

      // Create two cell elements for the coordinates and append them to the new row
      const eastingCell = document.createElement("td");
      const eastingInput = document.createElement("input");
      eastingInput.type = "number";
      eastingInput.className = `${firstRowInputs[6].className}${
        tableBody.querySelectorAll("tr").length
      }`; // Add a number to the class name
      eastingCell.appendChild(eastingInput);
      newRow.appendChild(eastingCell);

      const northingCell = document.createElement("td");
      const northingInput = document.createElement("input");
      northingInput.type = "number";
      northingInput.className = `${firstRowInputs[7].className}${
        tableBody.querySelectorAll("tr").length
      }`; // Add a number to the class name
      northingCell.appendChild(northingInput);
      newRow.appendChild(northingCell);

      // Set the value of the first input element to the new row number
      const firstInput = newRow.querySelector("input");
      firstInput.value = newRowNum;

      // Increment the newRowNum
      newRowNum++;

      // Append the new row to the table
      tableBody.appendChild(newRow);
    });

    // const getLastRowInputValue = (input, callback) => {
    //   input.addEventListener("input", (event) => {
    //     callback(event.target.value);
    //   });
    // };

    if (tableBody) {
      tableBody.addEventListener("input", function (event) {
        // Check if the event was triggered on a table row
        if (event.target.tagName === "INPUT" && event.target.closest("tr")) {
          // Get the total number of rows
          const numRows = tableBody.querySelectorAll("tr").length;

          const currentRow = event.target.closest("tr");
          const currentEastingInput = currentRow.querySelector(".easting");
          const currentNorthingInput = currentRow.querySelector(".northing");
          const currentDistanceInput = currentRow.querySelector(".distance");
          const currentBearingInput = currentRow.querySelector(".bearing");

          let prevEasting, prevNorthing;

          // Loop through each row
          for (let i = 0; i < numRows; i++) {
            // Get the row element and input fields for easting and northing
            const row = tableBody.querySelectorAll(`tr`)[i];

            const eastingInput =
              i === 0
                ? row.querySelector(`.easting`)
                : row.querySelector(`.easting${i}`);
            const northingInput =
              i === 0
                ? row.querySelector(`.northing`)
                : row.querySelector(`.northing${i}`);
            const distanceInput =
              i === 0
                ? row.querySelector(`.distance`)
                : row.querySelector(`.distance${i}`);
            const bearingInput =
              i === 0
                ? row.querySelector(`.bearing`)
                : row.querySelector(`.bearing${i}`);
            const departure =
              i === 0
                ? row.querySelector(`.departure`)
                : row.querySelector(`.departure${i}`);
            const latitude =
              i === 0
                ? row.querySelector(`.latitude`)
                : row.querySelector(`.latitude${i}`);

            distance = distanceInput ? distanceInput.value : "";
            bearing = bearingInput ? bearingInput.value : "";
            northing = northingInput ? northingInput.value : "";
            easting = eastingInput ? eastingInput.value : "";

            bearingInput.addEventListener("input", function (event) {});
            distanceInput.addEventListener("input", function (event) {});
            eastingInput.addEventListener("input", function (event) {});
            northingInput.addEventListener("input", function (event) {});

            if (
              eastingInput &&
              northingInput &&
              prevEasting !== undefined &&
              prevNorthing !== undefined &&
              eastingInput.value !== "" &&
              northingInput.value !== ""
            ) {
              const distanceBetweenPoints = Math.sqrt(
                Math.pow(eastingInput.value - prevEasting, 2) +
                  Math.pow(northingInput.value - prevNorthing, 2)
              );

              if (distanceInput) {
                distanceInput.value = distanceBetweenPoints.toFixed(2);
              }

              let deltaX, deltaY;

              if (bearingInput) {
                deltaX = eastingInput.value - prevEasting;
                deltaY = northingInput.value - prevNorthing;
                // const distanceBetweenPoints = Math.sqrt(deltaX ** 2 + deltaY ** 2);
                const bearingDegrees =
                  (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
                const bearing =
                  bearingDegrees >= 0 ? bearingDegrees : bearingDegrees + 360;
                const degrees = Math.floor(bearing);
                const minutes = Math.floor((bearing - degrees) * 60);
                const seconds = (
                  (bearing - degrees - minutes / 60) *
                  3600
                ).toFixed(2);
                bearingInput.value = `${degrees}°${minutes}'${seconds}"`;
              }
              if (departure) {
                departure.value = deltaX;
              }
              if (latitude) {
                latitude.value = deltaY;
              }
            }

            // Update prevEasting and prevNorthing variables
            prevEasting = eastingInput ? eastingInput.value : undefined;
            prevNorthing = northingInput ? northingInput.value : undefined;
          }
        }
      });
    }

    // Add a click event listener to the "Remove Row" button
    removeRowBtn.addEventListener("click", () => {
      // Get the last row of the table body
      const rows = tableBody.querySelectorAll("tr");
      const lastRow = rows[rows.length - 1];

      // Remove the last row if there is more than one row
      if (rows.length > 1) {
        tableBody.removeChild(lastRow);
      }
    });

    // Add a click event listener to the Clear Data button
    clearDataButton.addEventListener("click", () => {
      // Loop through each cell in the table body and clear its value
      const cells = tableBody.querySelectorAll("td");
      cells.forEach((cell) => {
        cell.firstChild.value = "";
      });
    });

    const clearDataButton2 = document.querySelector("#delete-cell-data2");

    clearDataButton2.addEventListener("click", function () {
      const inputs = tableBody2.querySelectorAll("input");
      inputs.forEach((input) => (input.value = ""));
    });

    const removeRowBtn2 = document.querySelector("#remove-row-btn2");

    removeRowBtn2.addEventListener("click", function () {
      const rows = tableBody2.querySelectorAll("tr");
      if (rows.length > 1) {
        // Only remove if there's more than one row
        tableBody2.removeChild(rows[rows.length - 1]); // Remove the last row
        rowCount--; // Decrement the row count
      }
    });
  });
});
