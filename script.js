
window.onload = function() {
    function mousedownHandler() {
        buttonText.style.transitionDuration = "0.1s";
        buttonText.style.fontSize = "36px";
        heartButton.style.fill = "#970000";
        heartButton.style.transform = "scale(0.9) translate(5%, 5%)";
        heartButton.style.transitionDuration = "0.1s";
    }
    
    function mouseupHandler() {
        buttonText.style.transitionDuration = "0.25s";
        buttonText.style.fontSize = "40px";
        heartButton.style.fill = "#ff0000";
        heartButton.style.transform = "";
        heartButton.style.transitionDuration = "0.25s";
    }

    var buttonText = document.getElementById("buttonText");
    var heartButton = document.getElementById("heartButton");
    heartButton.addEventListener("mousedown", mousedownHandler);
    document.addEventListener("mouseup", mouseupHandler);
};
