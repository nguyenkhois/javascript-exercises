var minID = 1;
var maxID = 3;
var randomNumber = getRandomNumber(minID,maxID);

/*document.getElementById("displayRandomNumber").innerHTML = randomNumber;*/

let btnCheckNumber = document.getElementById("btnCheckNumber");
btnCheckNumber.addEventListener("click", function () {
    let txtNumberInput = convertStringToNumber(document.getElementById("txtNumberInput").value);
    if (txtNumberInput === randomNumber){
        alert("Your answer is right!");
    }else if (txtNumberInput < minID){
        alert("Your answer is false! IT'S TOO LOW!");
    }else if (txtNumberInput > maxID){
        alert("Your answer is false! IT'S TOO HIGH!");
    }else{
        alert("Your answer is false!");
    }
});