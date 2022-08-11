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