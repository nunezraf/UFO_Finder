// from data.js
var tableData = data;

// from data.js
console.log("this has loaded!")

var tableData = data;

// Select table
var tbody = d3.select("tbody");

function buildTable(data) {
   tbody.html("");

   data.forEach((dataRow)=> {
       var row = tbody.append("tr");

       Object.values(dataRow).forEach((val)=>{
           var cell = row.append("td");
               cell.text(val);

       });
   });

};



function handleClick() {

   d3.event.preventDefault();

   var date = d3.select("#datetime").property("value");
   console.log(date)
   var filteredData = data
   // TableData.filter(row=>row.datetime === date);

   if (date){

       filteredData = filteredData.filter(record => record.datetime === date);
   }
   console.log(filteredData);
   buildTable(filteredData);

}

d3.select("#filter-btn").on("click", handleClick);

buildTable(data);
