function dictionary1(){
    var Person= {
        sex:"female",
        name:"Kelly",
        occupation:"writer",
        height:60,
        age:27,
    };
    delete Person.height //deletes height KVP
    document.getElementById("Dictionary").innerHTML= Person.height;
}