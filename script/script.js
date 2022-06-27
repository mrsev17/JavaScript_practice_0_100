
function generate_table() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    for (let y = 0; y < 10; y++) {
        const row = document.createElement("tr");
        for (let x = 0; x < 10; x++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode((x + 10 * y) + 1);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "1");
}