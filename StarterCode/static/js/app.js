// from data.js
var tableData = data;

// Identify and set variables for html field tags
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// create function to populate table from the data.js file
function populateTable() {
    tableData.map(data => {

        // make a new row
        var row = tbody.append("tr");
        // append each row with the data
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);   
    });
}
// populate table by calling the function create above
populateTable(data);