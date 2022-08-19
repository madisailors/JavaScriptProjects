function displayType(animal) {
    var animalType = animal.getAttribute(data-animal-family);
    alert(animalType + " is in the " + animal.innnerHTML + " family!");
}