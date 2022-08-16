function call_loop() {
    var digit= "";
    var X = 1;
    while (X < 11) {
        digit += "<br>" + X;  /*Call function */
        X++
    }
    document.getElementById("loop").innerHTML = digit;
}

function stringlength() { /*name of funtion*/
    let text= "Click here to find the length of this sentence";
    let length= text.length; /* defining length and adding variable text */
    document.getElementById("length").innerHTML= length; /* calling html paragraph id */
}

var instruments= ["drums", "piano", "bass", "trumpet", "recorder"];
var content= "";
var Y;
function for_loop() { 
    for (Y = 0; Y < instruments.length; Y++) { 
        content += instruments[Y] + "<br>";
    }
    document.getElementById("list").innerHTML = content;
}

function array_function() {
    var cat_pic =[];
    cat_pic[0] = "sleeping"; /* calling one item from the array to be displayed on my webpage */
    cat_pic[1] = "sitting";
    cat_pic[2] = "playing";
    document.getElementById("array").innerHTML = "This cat is " + cat_pic[2] + ".";
}

function constant_function() {
    const music = {type:"guitar", brand:"fender", color:"black"};
    music.color= "blue";
    music.price= "$900";
    document.getElementById("constant").innerHTML= "The cost of the " 
    + music.type + " was " + music.price; /* naming a constant */
}

function return_function(){
    var X = 10;
    var Y = 37; 
    return (X + Y);
}

function house_f() {
let house = {
    size: "2,000 sq ft ",
    color: "light blue ",
    year: "1967",
    bedrooms: "four ",
    description: function house_f() {
        return "This house is a " + house.color + house.size +
        house.bedrooms + "bedroom, " + "built in " + house.year  + ".'";
    }
}
    document.getElementById("houseobject").innerHTML= house.description();
}

function break_function() {
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text = "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}
function cont_func() {
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text = "The number is " + i + "<br>";
    }
    document.getElementById("cont").innerHTML = text;
}