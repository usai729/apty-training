var myVar = "Initial value for var";
document.getElementById("var-result").innerHTML +=
	"<b>var</b>: " + myVar + "<br>";

var myVar = "Redeclared value for var";
document.getElementById("var-result").innerHTML +=
	"After redeclaration: " + myVar + "<br>";

myVar = "Changed value for var";
document.getElementById("var-result").innerHTML +=
	"After value change: " + myVar + "<br>";

let myLet = "Initial value for let";
document.getElementById("let-result").innerHTML +=
	"<b>let</b>: " + myLet + "<br>";

try {
	let myLet = "Redeclared value for let";
} catch (e) {
	document.getElementById("let-result").innerHTML +=
		"Let exists, error: " + e.message + "<br>";
}

myLet = "Changed value for let";
document.getElementById("let-result").innerHTML +=
	"After value change: " + myLet + "<br>";

const myConst = "Initial value for const";
document.getElementById("const-result").innerHTML +=
	"<b>const</b>: " + myConst + "<br>";

try {
	const myConst = "Redeclared value for const";
} catch (e) {
	document.getElementById("const-result").innerHTML +=
		"Error while redeclaring const: " + e.message + "<br>";
}

try {
	myConst = "Changed value for const";
} catch (e) {
	document.getElementById("const-result").innerHTML +=
		"Error while changing const: " + e.message + "<br>";
}
