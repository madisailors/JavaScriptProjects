function counter() {
    document.getElementById('nested_function').innerHTML = count();
    function count() {
        var start = 8;
        function plus1() {start += 1;}
        plus1();
        return (start);
    }
}

//nested functions