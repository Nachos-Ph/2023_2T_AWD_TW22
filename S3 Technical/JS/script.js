const display = document.getElementById("display");
const body = document.body;

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}

function changeGradient(degree) {
    body.style.background = `linear-gradient(${degree}deg, rgba(34,173,195,1) 0%, rgba(0,255,158,1) 100%)`;
}