var objColor = {color1:"red",color2:"green",color3:"pink"};

document.addEventListener("keydown",function (event) {
    let keycode = event.which;
    switch (keycode){
        case 49:// key 1
        document.getElementById("displayColor").innerHTML = objColor.color1;
        break;
        case 50:// key 2
            document.getElementById("displayColor").innerHTML = objColor.color2;
            break;
        case 51:// key 3
            document.getElementById("displayColor").innerHTML = objColor.color3;
            break;
        default:
            document.getElementById("displayColor").innerHTML = "Press any number keys from 1-3"
            break;
    }
});