function area(length = 0, width = 0) {
	return length * width;
}

function calculateArea() {
	let length = document.getElementById("length").value;
	let width = document.getElementById("width").value;

	if (!length) {
		length = null;
	}

	if (!width) {
		width = null;
	}

	document.getElementById("result").innerHTML = area(length, width);
}
