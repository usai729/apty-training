function getValues() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    return [parseInt(num1), parseInt(num2)];
}

function add() {
    var values = getValues();
    var num1 = values[0];
    var num2 = values[1];
    num1 += num2;
    document.getElementById('num1').value = num1;
    document.getElementById('output').innerText = num1;
}

function subtract() {
    var values = getValues();
    var num1 = values[0];
    var num2 = values[1];
    num1 -= num2;
    document.getElementById('num1').value = num1;
    document.getElementById('output').innerText = num1;
}

function multiply() {
    var values = getValues();
    var num1 = values[0];
    var num2 = values[1];
    num1 *= num2;
    document.getElementById('num1').value = num1;
    document.getElementById('output').innerText = num1;
}

function divide() {
    var values = getValues();
    var num1 = values[0];
    var num2 = values[1];
    if (num2 !== 0) {
        num1 /= num2;
    } else {
        document.getElementById('output').innerText = "Cannot divide by zero";
        return;
    }
    document.getElementById('num1').value = num1;
    document.getElementById('output').innerText = num1;
}

function modulus() {
    var values = getValues();
    var num1 = values[0];
    var num2 = values[1];
    num1 %= num2;
    document.getElementById('num1').value = num1;
    document.getElementById('output').innerText = num1;
}

function increment() {
    var num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    num1++;
    document.getElementById('num1').value = num1;
    document.getElementById('output').innerText = num1;
}

function decrement() {
    var num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);
    num1--;
    document.getElementById('num1').value = num1;
    document.getElementById('output').innerText = num1;
}
