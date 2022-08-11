function agefunction() {
    var age, can_vote;
    age= document.getElementById("age").value;
    can_vote= (age < 18) ? "you are not old enough":"you are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}