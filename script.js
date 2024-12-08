
/*
calcul = prompt("What is your operator?");
a = parseInt(calcul.split(" ")[0]);
b =  parseInt(calcul.split(" ")[2]);
operator = calcul.split(" ")[1]; */

/*
const add = function(a, b) {
    return a + b;
};

const substract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

const operate = function(nbr1, nbr2, operator) {
    if (operator === "+") {
        return add(nbr1, nbr2);
    } else if (operator == "-") {
        return substract(nbr1, nbr2);
    } else if (operator == "*") {
        return multiply(nbr1, nbr2);
    } else if (operator == "/") {
        return divide(nbr1, nbr2);
    }
}
*/

function appendValue(value) {
    const display = document.getElementById("display");
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    document.getElementById("display").innerText = "0";
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.innerText = eval(display.innerText.replace("x", "*")); 
    } catch (e) {
        display.innerText = "Erreur";
    }
}