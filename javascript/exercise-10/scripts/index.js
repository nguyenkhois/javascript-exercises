var minNumber = 1;
var maxNumber = 3;
var randomNumber = getRandomNumber(minNumber,maxNumber);

/*document.getElementById("displayRandomNumber").innerHTML = randomNumber;*/

let btnCheckNumber = document.getElementById("btnCheckNumber");
btnCheckNumber.addEventListener("click", function () {
    let txtNumberInput = convertStringToNumber(document.getElementById("txtNumberInput").value);
    if (txtNumberInput === randomNumber){
        alert("Your answer is right!");
    }else if (txtNumberInput < minNumber){
        alert("Your answer is false! IT'S TOO LOW!");
    }else if (txtNumberInput > maxNumber){
        alert("Your answer is false! IT'S TOO HIGH!");
    }else{
        alert("Your answer is false!");
    }
});

document.getElementById("btnPlayAgain").addEventListener("click", function () {
   location.reload();
});