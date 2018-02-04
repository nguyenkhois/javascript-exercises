let inputFullName = prompt("What is your full name?: ");
let arrayFullName = inputFullName.split(" ");
let firstName = "", lastName = "";

if (arrayFullName.length > 1 ){
    firstName = arrayFullName[0];

    for (let i = 1; i < arrayFullName.length; i++){
        lastName += arrayFullName[i];
        if (i !== arrayFullName.length-1){
            lastName += " ";
        }
    }
}else{
    if (arrayFullName.length === 1 && arrayFullName[0] !== ""){
        firstName = arrayFullName[0];
    }else{
        alert("You wrote nothing!");
    }
}

document.getElementById("displayFirstName").innerHTML = "First name: " + firstName.toLowerCase();
document.getElementById("displayLastName").innerHTML = "Last name: " + lastName.toUpperCase();