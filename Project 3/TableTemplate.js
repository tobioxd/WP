"use strict";

class TableTemplate {
  static fillIn(id, dict, columnName) {
    const table = document.getElementById(id);
    const rows = table.rows;

    // Process header row
    const headerCells = rows[0].cells;
    for (let i = 0; i < headerCells.length; i++) {
      const cell = headerCells[i];
      const processor = new window.TemplateProcessor(cell.innerHTML);
      cell.innerHTML = processor.fillIn(dict);
      if (columnName && cell.innerHTML === columnName) {
        columnName = i;
      }
    }

    // Process the rest of the table
    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].cells;
      for (let j = 0; j < cells.length; j++) {
        const cell = cells[j];
        if (columnName === undefined || j === columnName) {
          const processor = new window.TemplateProcessor(cell.innerHTML);
          cell.innerHTML = processor.fillIn(dict);
        }
      }
    }

    // Make the table visible if it was hidden
    if (table.style.visibility === "hidden") {
      table.style.visibility = "visible";
    }
  }
}
