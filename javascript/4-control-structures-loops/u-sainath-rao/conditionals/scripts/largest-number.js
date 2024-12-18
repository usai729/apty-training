function getLargest() {
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var num3 = document.getElementById("num3").value;

	if (num1 > num2 && num1 > num3) {
		document.getElementById("result").innerHTML =
			"The largest number is: " + num1;
	} else if (num2 > num1 && num2 > num3) {
		document.getElementById("result").innerHTML =
			"The largest number is: " + num2;
	} else {
		document.getElementById("result").innerHTML =
			"The largest number is: " + num3;
	}
}
