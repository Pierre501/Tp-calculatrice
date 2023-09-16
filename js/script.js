const display = document.getElementById("display");
const equal = document.getElementById("equal");
const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const virgule = document.getElementById("virgule");
const clear = document.getElementById("btn-clear");
const remove = document.getElementById("btn-remove");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const addition = document.getElementById("addition");
const soustraction = document.getElementById("soustraction");

var arrayDisplay = [];
arrayDisplay[0] = "0";
display.innerHTML = transformArrayToString(arrayDisplay);


button0.onclick = function(){
    pushElement(arrayDisplay, "0");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

button1.onclick = function(){
    pushElement(arrayDisplay, "1");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

button2.onclick = function(){
    pushElement(arrayDisplay, "2");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

button3.onclick = function(){
    pushElement(arrayDisplay, "3");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

button4.onclick = function(){
    pushElement(arrayDisplay, "4");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

button5.onclick = function(){
    pushElement(arrayDisplay, "5");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

button6.onclick = function(){
    pushElement(arrayDisplay, "6");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

button7.onclick = function(){
    pushElement(arrayDisplay, "7");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

button8.onclick = function(){
    pushElement(arrayDisplay, "8");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

button9.onclick = function(){
    pushElement(arrayDisplay, "9");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

virgule.onclick = function(){
    arrayDisplay.push(".");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

remove.onclick = function(){
    deleteElement(arrayDisplay);
    display.innerHTML = transformArrayToString(arrayDisplay);
}

multiplication.onclick = function(){
    addElementSign(arrayDisplay, " &times; ");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

addition.onclick = function(){
    addElementSign(arrayDisplay, " + ");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

soustraction.onclick = function(){
    addElementSign(arrayDisplay, " - ");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

division.onclick = function(){
    addElementSign(arrayDisplay, " &divide; ");
    display.innerHTML = transformArrayToString(arrayDisplay);
}

clear.onclick = function(){
    arrayDisplay = [];
    arrayDisplay[0] = "0";
    display.innerHTML = transformArrayToString(arrayDisplay);
}

equal.onclick = function(){
    let resultat = getResultatCalcul(arrayDisplay);
    display.innerHTML = resultat;
}

