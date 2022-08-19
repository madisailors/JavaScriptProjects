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
        Audio('./media/place.mp3');
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