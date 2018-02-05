var sumMoney = 0;
document.getElementById("btnPutMoney").addEventListener("click",function () {
    let txtMoneyIn = document.getElementById("txtMoneyIn");
    let moneyIn = convertStringToNumber(txtMoneyIn.value);
    sumMoney += moneyIn;
    txtMoneyIn.value = "";
    document.getElementById("displayCurrentMoney").innerHTML = sumMoney;
});

document.getElementById("btnGetMoney").addEventListener("click",function(){
    let txtMoneyOut = document.getElementById("txtMoneyOut");
    let moneyOut = convertStringToNumber(txtMoneyOut.value);
    sumMoney -= moneyOut;
    txtMoneyOut.value = "";
    document.getElementById("displayCurrentMoney").innerHTML = sumMoney;
});
