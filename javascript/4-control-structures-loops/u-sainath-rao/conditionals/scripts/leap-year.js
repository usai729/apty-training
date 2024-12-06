function leapYear() {
	let year = parseInt(document.getElementById("year").value);
	let isLeap = false; 

	if (year % 4 === 0) {
		if (year % 100 === 0) {
			if (year % 400 === 0) {
				isLeap = true; 
			} else {
				isLeap = false; 
			}
		} else {
			isLeap = true;
		}
	} else {
		isLeap = false;
	}

	document.getElementById("result").innerText = isLeap
		? `${year} is a leap year.`
		: `${year} is not a leap year.`;
}
