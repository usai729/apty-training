function area(length = 1, width = 1) {
	let outerArea = length * width;
	let innerArea = 0;

	function InnerArea() {
		return length * width;
	}

	innerArea = InnerArea();

	return { outerArea, innerArea };
}

function calculateArea() {
	let length = document.getElementById("length").value;
	let width = document.getElementById("width").value;

	if (!length) {
		length = undefined;
	}

	if (!width) {
		width = undefined;
	}

	const { outerArea, innerArea } = area(length, width);

	document.getElementById(
		"result"
	).innerHTML = `Outer function: ${outerArea}<br>Inner function: ${innerArea}`;
}
