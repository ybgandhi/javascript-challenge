// from data.js
var tableData = data;

// Identify and set variables for html field tags
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

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
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");
    // display input value of date in console log
    console.log(inputCity);
    console.log(inputState);
    console.log(inputCountry);
    console.log(inputShape);
    // set filter variables
    var filteredDate = data.filter(data => data.datetime === inputDate);
    var filteredCity = data.filter(data => data.city === inputCity);
    var filteredState = data.filter(data => data.state === inputState);
    var filteredCountry = data.filter(data => data.country === inputCountry);
    var filteredShape = data.filter(data => data.shape === inputShape);
    var filteredData = tableData.filter(data => data.datetime === inputDate && data.city === inputCity && data.state === inputState && data.country === inputCountry && data.shape === inputShape);
    console.log(filteredData);
    // clear the default table
    tbody.html("");
    // create for loop to set up table
    let response ={
        filteredDate, filteredCity, filteredState, filteredCountry, filteredShape
    }
    if (response.filteredData.length !== 0) {
        populate(filteredData);
    }
        else if (response.filteredData.length === 0 && ((response.filteredCity.length !== 0 ||response.filteredDate.length !== 0))){
            populate(filteredCity) || populate(filteredDate);
        }
        else {
            tbody.append("tr").append("td").text("No Results found!");
        }

  //  filteredData.forEach(data => {
  //      // make a new row
  //      var row = tbody.append("tr");
        // add data to the row
        //row.append("td").text(data.datetime);
        //row.append("td").text(data.city);
        //row.append("td").text(data.state);
        //row.append("td").text(data.country);
        //row.append("td").text(data.shape);
        //row.append("td").text(data.durationMinutes);
        //row.append("td").text(data.comments);  
    };
// use on function in d3 to attach the function to the handler function
button1.on("click", handleClick);
// d3.selectAll