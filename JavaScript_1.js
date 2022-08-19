function animal_function() {
    var animal_output;
    var animals = document.getElementById("animal_input").value;
    var animals_string = " is a great animal!";
    switch(animals) {
        case "Capybara":
            animal_output = "Capybara" + animals_string;
        break;
        case "Legless Lizard":
            animal_output = "Legless Lizard" + animals_string;
        break;
        case "Emu":
            animal_output = "Emu" + animals_string;
        break;
        case "Axolotl":
            animal_output = "Axolotl" + animals_string;
        break;
        case "Okapi":
            animal_output = "Okapi" + animals_string;
        break;
        case "Blobfish":
            animal_output = "Blobfish" + animals_string;
        break;
        default:
            animal_output = "Please enter an animal exactly as it is written above.";
    }
    document.getElementById("output").innerHTML = animal_output;
}

function Hello_world_function() {
    var A= document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("ID_name");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var d = document.getElementById("gradient");
var dtx = d.getContext("2d");

var grd = dtx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

dtx.fillStyle = grd;
dtx.fillRect(20, 20, 150, 100);