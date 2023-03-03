// Get all the navigation links and sections
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("article section");

window.addEventListener("load", () => {
  // Set the first navigation link as active
  navLinks[0].classList.add("active");

  // Hide all sections except the first one
  for (let i = 1; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
});

// Add event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Remove the 'active' class from all navigation links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the 'active' class to the clicked link
    link.classList.add("active");

    // Hide all sections
    sections.forEach((section) => {
      section.style.display = "none";
    });

    // Show the corresponding section
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    targetSection.style.display = "block";
  });
});

// Get the table and button elements
const table = document.querySelector("#options-table");
const addRowBtn = document.querySelector("#add-row-btn");
const removeRowBtn = document.querySelector("#remove-row-btn");
const tableBody = document.querySelector("tbody");
const clearDataButton = document.querySelector("#delete-cell-data");

// Add a click event listener to the "Add Row" button
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
    newInput.type = "text";
    newInput.className = `${firstRowInputs[i].className}${
      tableBody.querySelectorAll("tr").length
    }`; // Add a number to the class name
    newCell.appendChild(newInput);
    newRow.appendChild(newCell);
  }

  // Create two cell elements for the coordinates and append them to the new row
  const eastingCell = document.createElement("td");
  const eastingInput = document.createElement("input");
  eastingInput.type = "text";
  eastingInput.className = `${firstRowInputs[6].className}${
    tableBody.querySelectorAll("tr").length
  }`; // Add a number to the class name
  eastingCell.appendChild(eastingInput);
  newRow.appendChild(eastingCell);

  const northingCell = document.createElement("td");
  const northingInput = document.createElement("input");
  northingInput.type = "text";
  northingInput.className = `${firstRowInputs[7].className}${
    tableBody.querySelectorAll("tr").length
  }`; // Add a number to the class name
  northingCell.appendChild(northingInput);
  newRow.appendChild(northingCell);

  // Append the new row to the table
  tableBody.appendChild(newRow);
});

const getLastRowInputValue = (input, callback) => {
  input.addEventListener("input", (event) => {
    callback(event.target.value);
  });
};

if (tableBody) {
  tableBody.addEventListener("input", function (event) {
    // Check if the event was triggered on a table row
    if (event.target.tagName === "INPUT" && event.target.closest("tr")) {
      // Get the total number of rows
      const numRows = tableBody.querySelectorAll("tr").length;

      let x1, y1, x2, y2, prevEasting, prevNorthing;

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
        const distance =
          i === 0
            ? row.querySelector(`.distance`)
            : row.querySelector(`.distance${i}`);

        if (eastingInput && northingInput && prevEasting && prevNorthing) {
          const distanceBetweenPoints = Math.sqrt(
            Math.pow(eastingInput.value - prevEasting, 2) +
              Math.pow(northingInput.value - prevNorthing, 2)
          );
          if (distance) {
            distance.value = distanceBetweenPoints.toFixed(2);
          }
        }

        // Update prevEasting and prevNorthing variables
        prevEasting = eastingInput ? eastingInput.value : undefined;
        prevNorthing = northingInput ? northingInput.value : undefined;

        // Listen for changes in the easting and northing input fields
        if (eastingInput) {
          getLastRowInputValue(eastingInput, (value) => {
            console.log(`easting${i}: ${value}`);
          });
        }
        if (northingInput) {
          getLastRowInputValue(northingInput, (value) => {
            console.log(`northing${i}: ${value}`);
          });
        }
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
