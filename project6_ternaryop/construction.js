function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

var Madi = new vehicle("ford", "fusion", 2012, "white");
var Dean = new vehicle("chevy", "impala", 1967, "black");
var Patt = new vehicle("chevy", "malibu", 2017, "blue");

function myfunction() {
    document.getElementById("keywords").innerHTML=
    "Dean drives a " + Dean.vehicle_color + " -colored" + Dean.vehicle_model +
    " manufactured in " + Dean.vehicle_year;
}

//constructor function