function check() {
	var number = document.getElementById("num").value;
	if (number % 2 == 0) {
		document.getElementById("result").innerHTML = "The number is even";
	} else {
		document.getElementById("result").innerHTML = "The number is odd";
	}
}
