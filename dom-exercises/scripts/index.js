// Exercise 1
let myExistingButton = document.getElementById("btn_myButton");
myExistingButton.addEventListener("click",function (e) {
    //Do something here
    let myExistingContent = document.getElementsByTagName("p")[0];
    myExistingContent.setAttribute("style","font-size:30px;color:red;");
});

// Exercise 2
let myExistingButton2 = document.getElementById("btn_Submit");
myExistingButton2.addEventListener("click", function (e) {
   //Do something
    let txt_existingOne = document.getElementById("txt_one");
    let txt_existingTwo = document.getElementById("txt_two");

    console.log(txt_existingOne.value);
    console.log(txt_existingTwo.value);
});

// Exercise 3
let myExistingButton3 = document.getElementById("btn_myButton3");
myExistingButton3.addEventListener("click", function (e) {
   //Do something
    let hrefObject = document.getElementById("href_myHref");

    let myID = hrefObject.getAttribute("id");
    let myHref = hrefObject.getAttribute("href");
    let myHreflang = hrefObject.getAttribute("hreflang");
    let myTarget = hrefObject.getAttribute("target");

    console.log(myID, myHref, myHreflang, myTarget);
});


//Exercise 5
//Add new row
function addNewRow(existingTable){
    let newRow = document.createElement("tr");
    newRow.innerHTML = "<td>New row added</td>";

    return existingTable.appendChild(newRow);
}
let myExistingButtonAddrow = document.getElementById("btn_AddRow");
myExistingButtonAddrow.addEventListener("click", function (e) {
    let existingTable = document.getElementById("tb_myTable");
    addNewRow(existingTable);
});

//Remove row from the top
function removeOneRow(existingTable, removePosition) {
    return existingTable.deleteRow(removePosition);
}
let myExistingButtonRemoveRow = document.getElementById("btn_RemoveRow");
myExistingButtonRemoveRow.addEventListener("click", function(e) {
    let existingTable = document.getElementById("tb_myTable");
    return removeOneRow(existingTable,0); //Remove from top

    /*Remove from bottom
    let rowCount = existingTable.rows.length;
    removeOneRow(existingTable,rowCount-1);
    */
});

// Exercise 6
document.body.onresize = () => {
    console.log("Screen height: ", window.innerHeight);
    console.log("Screen width: ", window.innerWidth);
}

// Exercise 7
let myInputHaveOwnValue = document.getElementById("txt_OwnValue");
myInputHaveOwnValue.addEventListener("keyup", function(e) {
    console.log(myInputHaveOwnValue.getAttribute("value"));
    console.log(myInputHaveOwnValue.value);
});