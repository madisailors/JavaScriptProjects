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