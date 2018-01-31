//The first way
let divTag = document.createElement("div");
let paragraph = document.createElement("p");
let text = document.createTextNode("Something in text");

let imageTag = document.createElement("img");
imageTag.setAttribute("src","../images/rabbit.jpg");

divTag.appendChild(paragraph);
paragraph.appendChild(text);
divTag.appendChild(imageTag);
//-----

//The second way to add HTML content into <body>
let divTag2 = document.createElement("div");
divTag2.innerHTML = "<p>Other way to add new image<img src='../images/rabbit.jpg' alt='Two rabbit' title='Two rabbit'></p>";
//----------

//--- Output to display
let existingBody = document.getElementsByTagName("body")[0];
existingBody.appendChild(divTag);
existingBody.appendChild(divTag2);