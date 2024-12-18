function splice(array = []) {
	if (array.length <= 2) {
		return;
	}

	array.splice(0, 2, "Basically", "Essentially");

	console.log(array);
}

splice(["A", 2, "C", 4, "D", 6]);
