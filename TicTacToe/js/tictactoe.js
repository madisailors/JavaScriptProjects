let activePlayer = 'X'; //this variable keeps track of who's turn it is

//this array stores an array of moves. used to determine win conditions
let selectedSquares = [];

//this function is for placing X or O in a square
function placeXOrO(squareNumber) {
    //condition ensures a square hasnt already been selected
    //.some() method checks each element of the selectSquare array
    //to see if it contains the square # clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = "url('images/xjpeg.png')";
        } else{ 
            select.style.backgroundImage = "url('images/o.png')";
        }
        selectedSquares.push(squareNumber + activePlayer); // variables concatenated and added to array
        checkWinConditions(); //calls a function to check for any win condition
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
    //This function plays placement sound
 audio('./media/place1.mp3');
 //this condition checks to see if it's the comps turn
 if (activePlayer === 'O') {
    //disables clicking for comps turn
    disableClick();
    setTimeout(function () { computersTurn(); }, 1000);
    }
    //returning true is needed for our computersTurn() function to work
    return true;
}
    //this function results in random square being selected by comp
    function computersTurn() {
    //boolean needed for our while loop
    let success = false;
    //variable stores random number 0-8
    let pickASquare;
    //condition allows our while loop to keep trying if a square is selected
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                //this line calls the function
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}



//this function parses the selectedSquares array to search for win conditions
//drawLine() function is called to draw a line on the screen if the condition is met
function checkWinConditions() {
            // X 0,1,2 condition
            if (arrayIncludes('0X','1X','2X')) {drawWinLine(50, 100, 558, 100)}
            // X 3,4,5 condition
            else if (arrayIncludes('3X','4X','5X')) {drawWinLine(50, 304, 558, 304)}
            // X 6,7,8
            else if (arrayIncludes('6X','7X','8X')) {drawWinLine(50, 508, 558, 508)}
            //X 0,3,6 
            else if (arrayIncludes('0X','3X','6X')) {drawWinLine(100, 50, 100, 558)}
            //X 1,4,7
            else if (arrayIncludes('1X','4X','7X')) {drawWinLine(304, 50, 304, 558)}
            //X 2,5,8
            else if (arrayIncludes('2X','5X','8X')) {drawWinLine(508, 50, 508, 558)}
            //X 6,4,2
            else if (arrayIncludes('6X','4X','2X')) {drawWinLine(100, 508, 510, 90)}
            //X 0,4,8
            else if (arrayIncludes('0X','4X','8X')) {drawWinLine(100, 100, 520, 520)}
            //O 0,1,2
            else if (arrayIncludes('0O','1O','2O')) {drawWinLine(50, 100, 558, 100)}
            //O 3,4,5
            else if (arrayIncludes('3O','4O','5O')) {drawWinLine(50, 304, 558, 304)}
            //O 6,7,8
            else if (arrayIncludes('6O','7O','8O')) {drawWinLine(50, 508, 558, 508)}
            //O 0,3,6
            else if (arrayIncludes('0O','3O','6O')) {drawWinLine(100, 50, 100, 558)}
            //O 1,4,7
            else if (arrayIncludes('1O','4O','7O')) {drawWinLine(304, 50, 304, 558)}
            //O 2,5,8
            else if (arrayIncludes('2O','5O','8O')) {drawWinLine(508, 50, 508, 558)}
            // O 6,4,2
            else if (arrayIncludes('6O','4O','2O')) {drawWinLine(100, 508, 510, 90)}
            // O 0,4,8
            else if (arrayIncludes('0O','4O','8O')) {drawWinLine(100, 100, 520, 520)}
            //This condition checks for a tie 
            else if (selectedSquares.length >= 9) {
                //plays tie sound
                audio('./media/tie.mp3');
                //this sets a .3 sec timer before resetGame is called
                setTimeout(function () {resetGame();}, 500);
            }
}

            //checks if any array includes 3 strings
            function arrayIncludes(squareA, squareB, squareC) {
                //these variables will be used to check for 3 ina row
                const a = selectedSquares.includes(squareA);
                const b = selectedSquares.includes(squareB);
                const c= selectedSquares.includes(squareC);
                //if the 3 variables we pass are all included in our array
                //then true is returned and our else if condition executes drawLine()
                if (a === true && b === true && c === true) {return true;}
            }


//this function makes our body element temporarily unclickable
function disableClick() {
        //makes body unclickable
        body.style.pointerEvents= 'none';
        //makes clickable after 1 second
        setTimeout(function () { body.style.pointerEvents= 'auto';}, 1000);
    }

    function audio(audioURL) {
        let audio = new Audio(audioURL);
        audio.play();
    }
    
 //this function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d'); //gives access to methods and properties to use on canvas
    //indicates where the start of a lines X axis is
    let x1= coordX1,
        y1= coordY1,
        x2= coordX2,
        y2= coordY2,
        x = x1,
        y = y1;
    //this function interacts with the canvas
    function animateLineDrawing() {
        //this variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from last loop iteration
        c.clearRect(0,0,608,608);
        //starts a new path
        c.beginPath();
        //moves to starting point in our line
        c.moveTo(x1, y1);
        //indicates end point in line
        c.lineTo(x,y);
        //set swidth of our line
        c.lineWidth = 10;
        //color
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //draws out everything we laid out above
        c.stroke();
        //checks if we've reached endpoints
        if(x1 <= x2 && y1<= y2) {
            //adds 10 to previous end x point
            if (x < x2 ) {x += 10; }
            //adds 10 to previous end y point
            if (y < y2) {y += 10; }
            //condition necesarry for 2,4,6 win conditions
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }

        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    function resetGame() {
         //for loop iterates through each HTML square element 
        for (let i = 0; i < 9; i++) {
            //variable gets HMTL element i
            let square = document.getElementById(String(i));
            //removes background image
            square.style.backgroundImage = '';
        }
            //resets array to start over
            selectedSquares = []; 
    }
    //disallows clicking while win sound is playing
disableClick();
//plays win sound
audio('./media/win.mp3');
//calls main animation loop
animateLineDrawing();
//waits 1 seconds, then clears canvas and resets game
setTimeout(function () { clear(); resetGame(); }, 1000);

}
    //resets game in event of tie or win
   // this function clears our canvas after our win line is drawn
   function clear() {
    //starts our animation loop
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0,0,608,608);
    //stops ainmation loop
    cancelAnimationFrame(animationLoop);
   }





    
