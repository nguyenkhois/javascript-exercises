let sNumbersEven = "";
let sNumberOdd = "";
for (let i = 0; i <= 10; i++){
    if (i % 2){
        sNumberOdd += i + " ";
    }else{
        sNumbersEven += i + " ";
    }
}
document.getElementById("displayNumbersEvent").innerHTML = "Even numbers: " + sNumbersEven;
document.getElementById("displayNumbersOdd").innerHTML = "Odd numbers: " + sNumberOdd;