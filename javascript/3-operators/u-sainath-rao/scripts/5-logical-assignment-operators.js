function logicalAndAssign() {
	let value1 = document.getElementById("value1").value;
	let value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	value1 = convertToType(value1, type1);
	value2 = convertToType(value2, type2);

	if (type1 == "symbol" || type2 == "symbol") {
		console.log(value1 &&= value2);
	}
	
	value1 &&= value2;
	document.getElementById("output").textContent = `&&= : ${value1}`;
}

function logicalOrAssign() {
	let value1 = document.getElementById("value1").value;
	let value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	value1 = convertToType(value1, type1);
	value2 = convertToType(value2, type2);

	if (type1 == "symbol" || type2 == "symbol") {
		console.log(value1 ||= value2);
	}

	value1 ||= value2;
	document.getElementById("output").textContent = `||= : ${value1}`;
}

function nullishCoalescingAssign() {
	let value1 = document.getElementById("value1").value;
	let value2 = document.getElementById("value2").value;
	const type1 = document.getElementById("type1").value;
	const type2 = document.getElementById("type2").value;

	value1 = convertToType(value1, type1);
	value2 = convertToType(value2, type2);

	if (type1 == "symbol" || type2 == "symbol") {
		console.log(value1 ??= value2);
	}

	value1 ??= value2;
	document.getElementById("output").textContent = `??= : ${value1}`;
}

function convertToType(value, type) {
	if (type === "boolean") return value.toLowerCase() === "true";
	if (type === "number") return Number(value);
	if (type === "symbol") return Symbol(String(value));
	return value;
}
