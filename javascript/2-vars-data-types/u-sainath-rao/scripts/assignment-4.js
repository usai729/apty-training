const stringExample = "Hello";
const numberExample = 42;
const booleanExample = true;
let undefinedExample;
const nullExample = null;
const symbolExample = Symbol("symbol");
const objectExample = { name: "Sai", age: 21 };

document.getElementById("string-conversion").innerHTML = `
            <b>String ("${stringExample}") Conversion:</b><br>
            To Number: ${Number(stringExample)}<br>
            To Boolean: ${Boolean(stringExample)}<br>
            To String: ${String(stringExample)}<br>
        `;

document.getElementById("number-conversion").innerHTML = `
            <b>Number (${numberExample}) Conversion:</b><br>
            To Number: ${Number(numberExample)}<br>
            To Boolean: ${Boolean(numberExample)}<br>
            To String: ${String(numberExample)}<br>
        `;

document.getElementById("boolean-conversion").innerHTML = `
            <b>Boolean (${booleanExample}) Conversion:</b><br>
            To Number: ${Number(booleanExample)}<br>
            To Boolean: ${Boolean(booleanExample)}<br>
            To String: ${String(booleanExample)}<br>
        `;

document.getElementById("object-conversion").innerHTML = `
            <b>Object Conversion:</b><br>
            To Number: ${Number(objectExample)}<br>
            To Boolean: ${Boolean(objectExample)}<br>
            To String: ${String(objectExample)}<br>
        `;
