var minID = 1;
var maxID = 3;
var userIDRandom = getRandomNumber(minID,maxID);

document.getElementById("displayUserID").innerHTML = userIDRandom;

let btnCheckUserID = document.getElementById("btnCheckUserID");
btnCheckUserID.addEventListener("click", function () {
    let txtUserIDInput = convertStringToNumber(document.getElementById("txtUserIDInput").value);
    if (txtUserIDInput === userIDRandom){
        alert("Your ID is right!");
    }else if (txtUserIDInput < minID){
        alert("Your ID is false! IT'S TOO LOW!");
    }else if (txtUserIDInput > maxID){
        alert("Your ID is false! IT'S TOO HIGH!");
    }else{
        alert("Your ID is false!");
    }
});