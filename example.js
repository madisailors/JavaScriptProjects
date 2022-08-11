function my_func() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_func1() {
    document.getElementById("Test1").innerHTML = isNaN('this is a string');
}

function my_func2() {
    document.getElementById("Test2").innerHTML = isNaN('007');
}

document.write(2E310); //infinity

document.write(-2E310); //negative infinity

//boolean logic, true & false

document.write(10 > 2); 

document.write(10 < 3);

console.log(2 + 2); 

console.log(10 < 3);

document.write(10==10);

document.write(11==12);

X = 10;
Y = "10";
document.write(X === Y); //string & number, false

document.write(5>2 && 10>4);

document.write(5>10 || 10>4);

document.write();

function notfun() {
    document.getElementById("not").innerHTML = ! (20>10);
}

function notfun1() {
    document.getElementById("non").innerHTML = ! (5>10);
}
