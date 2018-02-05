function addZeroToDateMonth(sString){
    if (sString.toString().length === 1){
        sString = "0" + sString;
    }
    return sString;
}
function getCurrentDate(){
    let currentDate = new Date();
    let date = currentDate.getDate();
    let month = currentDate.getMonth()+1; //The numeric representation of months in JavaScript start on '0', so you will need to add the code necessary for making the months start on '1'
    let year = currentDate.getFullYear();

    return year + "-" + addZeroToDateMonth(month) + "-" + addZeroToDateMonth(date);
}
function getCurrentTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    return hours + ":" + minutes;
}

function convertStringToNumber(sNumber, fractionDigits) {
    return parseFloat(Number(sNumber).toFixed(fractionDigits));
}