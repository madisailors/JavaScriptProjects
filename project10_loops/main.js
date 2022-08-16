function call_loop() {
    var digit= "";
    var X = 1;
    while (X < 11) {
        digit += "<br>" + X;
        X++
    }
    document.getElementById("loop").innerHTML = digit;
}

function stringlength() {
    let text= "Click here to find the length of this sentence";
    let length= text.length;
    document.getElementById("length").innerHTML= length;
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
    cat_pic[0] = "sleeping";
    cat_pic[1] = "sitting";
    cat_pic[2] = "playing";
    document.getElementById("array").innerHTML = "This cat is " + cat_pic[2] + ".";
}

function constant_function() {
    const music = {type:"guitar", brand:"fender", color:"black"};
    music.color= "blue";
    music.price= "$900";
    document.getElementById("constant").innerHTML= "The cost of the " 
    + music.type + " was " + music.price;
}

function return_function(){
    var X = 10;
    var Y = 37;
    return (X + Y);
    document.getElementById("demo").innerHTML= (X + Y);
}

function house_f() {
let house= {
    size: "2,000 sq ft ",
    color: "light blue ",
    year: "1967",
    bedrooms: "four ",
    description: function house_f() {
        return "This house is a " + house.color + house.size +
        house.bedrooms + "bedroom, " + "built in " + house.year  + ".'";
    }
}
    document.getElementById("houseobject").innerHTML= house.description;
};

function break_function() {
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text = "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}