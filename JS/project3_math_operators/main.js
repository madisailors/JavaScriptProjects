//BASIC MATH OPERATIONS

function addition() {
    var addition= 7 + 2;
    document.getElementById("Add").innerHTML="7 + 2 = " + addition;
}

function subtraction() {
    var subtraction= 7 - 2;
    document.getElementById("Subtract").innerHTML="7 - 2 = " + subtraction;
}


function multiplication() {
    var multiplication= 7 * 2;
    document.getElementById("Multiply").innerHTML="7 * 2 = " + multiplication;
}


function division() {
    var division= 7 / 2;
    document.getElementById("Divide").innerHTML="7 / 2 = " + division;
}

function Math(){
    var simple_math = (1 +3 ) * 10 / 2 - 3;
    document.getElementById("Math").innerHTML = "1 plus 3, multiplied by 10, divided by 2, subtracted by 3 = " + simple_math;
}

function modulus_operator() {
    var simple_Math1 = 25 % 6;
    document.getElementById("Math1").innerHTML = "When you divide 25 by 6 you get a remainder of: " + simple_Math1;
}

// increment, decrement, negation, random

function negation() {
    var x = 10;
    document.getElementById("neg").innerHTML = -x;
}

function increment() {
    var a = 5;
    a++;
    document.write(a);
}

function decrement(){
    var b = 5.25;
    b--;
    document.write(b);
}

function random(){
    window.alert(Math.random());
}

function random1(){
    window.alert(Math.random() * 100);
}

Math.round(6.7)