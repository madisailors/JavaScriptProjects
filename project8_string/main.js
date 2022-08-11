function full_sentence() {
    var p1="Here is ";
    var p2="my whole ";     //makes variable values into one string
    var p3="entire ";
    var p4="sentence!";
    var whole= p1.concat(p2, p3, p4);
    document.getElementById("Concatenate").innerHTML = whole;
}

function slice_method() {
    var sentence= "All work no play makes Johnny a dull boy.";
    var section= sentence.slice(23,29);
    document.getElementById("slice").innerHTML = section;
}

function toUpperCase() { //converts to upper case
    let text= "Hello";
    let result= text.toUpperCase();
    document.getElementById("upper").innerHTML = result;
}

function search() {
    let text= "Sally sold sea shells by the sea shore";
    let position= text.search("Sold");
    document.getElementById("search").innerHTML = position;
}

function string_method() {
    var X = 176;
    document.getElementById("numbers2string").innerHTML = X.toString();
}

function Precision_method() {
    var X = 12938.3012987376112;
    document.getElementById("precisionid").innerHTML = X.toPrecision(10);
}

function fixed_method(){
    let num = 5.569345;
    let n = num.toFixed(2);
    document.getElementById("fixed").innerHTML = n; 
}

function value_of() {
    let text= "Hello there";
    let result= text.valueOf();
    document.getElementById("value").innerHTML = result;
}