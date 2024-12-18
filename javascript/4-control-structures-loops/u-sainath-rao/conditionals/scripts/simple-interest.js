function calc() {
	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var time = document.getElementById("time").value;

	var simpleInterest = (principal * rate * time) / 100;

	document.getElementById("result").innerHTML =
		"Simple Interest: " + simpleInterest;
}
