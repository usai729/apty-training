var equation = "5+5";
const output_element = document.getElementById("display");

function toggleMode() {
	const isChecked = document.getElementById("mode").checked;

	if (isChecked) {
		document.getElementById("advanced-calculator").style.display = "none";
		document.getElementById("simple-calculator").style.display = "block";
	} else {
		document.getElementById("advanced-calculator").style.display = "block";
		document.getElementById("simple-calculator").style.display = "none";
	}
}

function showOutput() {
	output_element.value = equation;
}

function append(val) {
	if (equation.length == 0 && ["+", "-", "*", "/", "%"].includes(val)) {
		return;
	}
	if (
		(equation.endsWith("+") ||
			equation.endsWith("-") ||
			equation.endsWith("*") ||
			equation.endsWith("/") ||
			equation.endsWith("%")) &&
		["+", "-", "*", "/", "%"].includes(val)
	) {
		return;
	}

	if (
		val == "++" ||
		(val == "--" && equation.length != 0 && !equation.match(/[+\\%-/*]$/))
	) {
		let result;

		switch (val) {
			case "++":
				result = parseFloat(equation) + 1;
				break;
			case "--":
				result = parseFloat(equation) - 1;
				break;
			default:
				break;
		}

		equation = "";
		equation = String(result);

		showOutput();
		return;
	}

	equation += val;

	showOutput();
	return;
}

function calcResult() {
	if (equation.length > 0) {
		let result = eval(equation);
		equation = String(parseFloat(result).toFixed(2));

		showOutput();
	}

	return;
}

function clr() {
	equation = "";

	showOutput();
	return;
}

function calculate(operation) {
	const num1 = parseFloat(document.getElementById("num1").value);
	const num2 = parseFloat(document.getElementById("num2").value);

	if (isNaN(num1) || isNaN(num2)) {
		document.getElementById("result").innerText =
			"Please enter valid numbers in both fields.";
		return;
	}

	let result;

	switch (operation) {
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			if (num2 === 0) {
				result = "Zero division error";
			} else {
				result = num1 / num2;
			}
			break;
		default:
			result = "Operation unavailable";
	}

	document.getElementById("result").innerText = `Result: ${result}`;
}

function createHoverEffect(key, type) {
	const styles = {
		"num-keys": { initial: "#f1f1f1", final: "#fff" },
		"operator-keys": { initial: "#ff7b00", final: "#ff9f00" },
	};

	if (styles[type]) {
		key.style.backgroundColor = styles[type].initial;

		setTimeout(() => {
			key.style.backgroundColor = styles[type].final;
		}, 300);
	}
}

window.addEventListener("keydown", (event) => {
	const key = event.key.toLowerCase();

	if (/[0-9+\-*/.=]/.test(key)) {
		const button = document.getElementById(`key-${key}`);
		createHoverEffect(button, button.className);

		append(key);
	} else {
		if (key === "c") {
			clr();
		} else if (key === "=" || key === "enter") {
			calcResult();
		}
	}
});

window.onload = function () {
	document.getElementById("simple-calculator").style.display = "none";
	toggleMode();
	clr();
};
