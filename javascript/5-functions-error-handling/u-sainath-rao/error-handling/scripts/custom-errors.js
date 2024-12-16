class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = this.constructor.name;
	}
}

function calc(val1, val2, operator) {
	try {
		if (typeof val1 !== "number" || typeof val2 !== "number") {
			throw new CustomError("Both values must be numeric");
		}

		if (!["+", "-", "*", "/", "%"].includes(operator)) {
			throw new CustomError("Invalid operator. Use one of: +, -, *, /, %");
		}

		switch (operator) {
			case "+":
				return val1 + val2;
			case "-":
				return val1 - val2;
			case "*":
				return val1 * val2;
			case "/":
				if (val2 === 0) {
					throw new CustomError("Cannot divide by zero");
				}
				return val1 / val2;
			case "%":
				if (val2 === 0) {
					throw new CustomError("Cannot divide by zero");
				}
				return val1 % val2;
			default:
				throw new CustomError("An unexpected error occurred");
		}
	} catch (e) {
		if (e instanceof CustomError) {
			console.error(`${e.name}: ${e.message}`);
		} else {
			console.error("Unexpected error:", e.message);
		}
	}
}

console.log(calc(10, 5, "+"));
console.log(calc(10, "a", "+"));
console.log(calc(10, 0, "/"));
console.log(calc(10, 5, "^"));
