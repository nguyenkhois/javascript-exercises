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
document.getElementById("displayDateTime").innerHTML = "Current date time is " + getCurrentDate() + " " + getCurrentTime();


//Stretch task 1
function getWeekDay(sYear, sMonth, sDate) {
    let sMonthNew = addZeroToDateMonth(parseInt(sMonth) - 1);

    //The day must have format YYYY/MM/DD
    let weekDayNr = new Date(sYear,sMonthNew,sDate).getDay();
    let weekDay;
    switch (weekDayNr){
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
        default:
            break;
    }
    return weekDay;
}

document.getElementById("viewDay").addEventListener("click",function (e) {
    let st1Date = document.getElementById("st1Date").value;
    let st1Month = document.getElementById("st1Month").value;
    let st1Year = document.getElementById("st1Year").value;

    document.getElementById("st1InputDay").innerHTML = "Input day is " + st1Year + "-" + st1Month + "-" + st1Date;
  document.getElementById("displayWeekDay").innerHTML = "The day is " + getWeekDay(st1Year,st1Month,st1Date);
});

//Stretch task 2
var setCurrentTime = setInterval(function(){theTimer();},1000);
function theTimer() {
    let currentTime = new Date().toLocaleTimeString();
    document.getElementById("displayCurrentTime").innerHTML = "The current time is " + currentTime;
}