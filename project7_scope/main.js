var X = 10;

function addnumbers1(){
    document.write(20 + X + "<br>");   // global code, variable is 
}                                      // outside of both functions
function addnumbers2(){
    document.write(X + 100);
}
addnumbers1();
addnumbers2();

///////////

function addnumbers1(){
    var C = 10
    document.write(20 + C + "<br>");  // local function, only 
}                                     // function with variable defined in
function addnumbers2(){               // it can display result
    document.write(C + 100);
}

addnumbers1();
(addnumbers2);

function getdate() {
    if (new Date().getHours() < 18) {
    document.getElementById("date").innerHTML = "How are you today?";
    }
}

function age_f() {
    age = document.getElementById("age").value;
    if (age >= 25) {
        ans= "You can rent a car!";
    }
    else {
        ans= "You are not old enough to rent a car.";
    }
    document.getElementById("how_old").innerHTML = ans;
}

function time_f() {
    var Time= new Date().getHours();
    var reply;
    if (Time < 12 == Time > 0) {
        reply= "It is morning time";
    }
    else if (Time >= 12 == Time < 18) {
        reply= "It is afternoon time";
    }
    else {
        reply= "It is evening time.";
    }
    document.getElementById("time").innerHTML = reply;
}