const stringExample = "Hello, world!";
const numberExample = 42;
const booleanExample = true;
let undefinedExample;
const nullExample = null;
const symbolExample = Symbol("symbol");
const objectExample = { name: "John", age: 30 };

document.getElementById(
	"string-type"
).innerHTML = `Data type of stringExample: ${typeof stringExample}`;
document.getElementById(
	"number-type"
).innerHTML = `Data type of numberExample: ${typeof numberExample}`;
document.getElementById(
	"boolean-type"
).innerHTML = `Data type of booleanExample: ${typeof booleanExample}`;
document.getElementById(
	"undefined-type"
).innerHTML = `Data type of undefinedExample: ${typeof undefinedExample}`;
document.getElementById(
	"null-type"
).innerHTML = `Data type of nullExample: ${typeof nullExample}`;
document.getElementById(
	"symbol-type"
).innerHTML = `Data type of symbolExample: ${typeof symbolExample}`;
document.getElementById(
	"object-type"
).innerHTML = `Data type of objectExample: ${typeof objectExample}`;
