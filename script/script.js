
function generate_table() {

    // Create a <table> element and a <tbody> element

    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    // Creating all cells

    for (let i = 1; i < 101; i++) {

        // Create a table row

        const row = document.createElement("tr");

        for (let j = 0; j < 1; j++) {

            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row

            const cell = document.createElement("td");
            const cellText = document.createTextNode(i);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        // Add the row to the end of table body

        tblBody.appendChild(row);
    }

    // Put the <tbody> in the <table>

    tbl.appendChild(tblBody);

    // Appends <table> into <body>

    document.body.appendChild(tbl);

    // Sets the border attribute of tbl to "2"

    tbl.setAttribute("border", "1");


}