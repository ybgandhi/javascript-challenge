// from data.js
var tableData = data;

// Identify and set variables for html field tags
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");

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

// filter table by date input
var button1 = d3.select("#filter-btn");

// set up function to handle when the button is clicked
function handleClick() {
    // set variable to the user input
    var inputDate = d3.select("#datetime").property("value");
    // display input value of date in console log
    console.log(inputDate);
    var filteredData = tableData.filter(data => data.datetime === inputDate);
    console.log(filteredData);
    // clear the default table
    tbody.html("");
    // create for loop to set up table
    filteredData.forEach(data => {
        // make a new row
        var row = tbody.append("tr");
        // add data to the row
        row.append("td").text(data.datetime);
        row.append("td").text(data.city);
        row.append("td").text(data.state);
        row.append("td").text(data.country);
        row.append("td").text(data.shape);
        row.append("td").text(data.durationMinutes);
        row.append("td").text(data.comments);  
    });
};
// use on function in d3 to attach the function to the handler function
button1.on("click", handleClick);
// d3.selectAll