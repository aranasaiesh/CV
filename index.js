var messageArray = ["Om mig"];
var textPosition = 0;
var speed = 300;

typewriter = () => {
    document.querySelector("#message").
    innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != messageArray[0].length){
        setTimeout(typewriter, speed); 
    } else {
        textPosition = 0;
        setTimeout(typewriter, speed);
    }

} 

window.addEventListener("load", typewriter);
