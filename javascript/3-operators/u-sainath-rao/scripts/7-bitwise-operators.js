function bitwiseAnd() {
    let value1 = parseInt(document.getElementById('value1').value);
    let value2 = parseInt(document.getElementById('value2').value);
    let result = value1 & value2;
    document.getElementById('output').textContent = `Result of ${value1} & ${value2} = ${result}`;
}

function bitwiseOr() {
    let value1 = parseInt(document.getElementById('value1').value);
    let value2 = parseInt(document.getElementById('value2').value);
    let result = value1 | value2;
    document.getElementById('output').textContent = `Result of ${value1} | ${value2} = ${result}`;
}

function bitwiseXor() {
    let value1 = parseInt(document.getElementById('value1').value);
    let value2 = parseInt(document.getElementById('value2').value);
    let result = value1 ^ value2;
    document.getElementById('output').textContent = `Result of ${value1} ^ ${value2} = ${result}`;
}

function bitwiseNot() {
    let value1 = parseInt(document.getElementById('value1').value);
    let result = ~value1;
    document.getElementById('output').textContent = `Result of ~${value1} = ${result}`;
}

function bitwiseLeftShift() {
    let value1 = parseInt(document.getElementById('value1').value);
    let result = value1 << 1;
    document.getElementById('output').textContent = `Result of ${value1} << 1 = ${result}`;
}

function bitwiseRightShift() {
    let value1 = parseInt(document.getElementById('value1').value);
    let result = value1 >> 1;
    document.getElementById('output').textContent = `Result of ${value1} >> 1 = ${result}`;
}