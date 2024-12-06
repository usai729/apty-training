window.onload = () => {
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let sum = 0,
		avg;

	arr.forEach((element) => {
		sum += parseInt(element);
	});

	avg = sum / arr.length;

	document.getElementById(
		"result"
	).innerHTML = `Sum: <strong>${sum}</strong><br>Average: <strong>${avg}</strong>`;
};
