const stringExample = "Hello";
const numberExample = 42;
const booleanExample = true;
let undefinedExample;
const nullExample = null;
const symbolExample = Symbol("symbol");
const objectExample = { name: "Sai", age: 21 };

document.getElementById(
	"string-type"
).innerHTML = `stringExample: ${typeof stringExample}`;
document.getElementById(
	"number-type"
).innerHTML = `numberExample: ${typeof numberExample}`;
document.getElementById(
	"boolean-type"
).innerHTML = `booleanExample: ${typeof booleanExample}`;
document.getElementById(
	"undefined-type"
).innerHTML = `undefinedExample: ${typeof undefinedExample}`;
document.getElementById(
	"null-type"
).innerHTML = `nullExample: ${typeof nullExample}`;
document.getElementById(
	"symbol-type"
).innerHTML = `symbolExample: ${typeof symbolExample}`;
document.getElementById(
	"object-type"
).innerHTML = `objectExample: ${typeof objectExample}`;
