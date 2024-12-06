function evaluateScore() {
	// 90+ => Grade A, 75-89 => Grade B, 50-74 => Grade C, Below 50 => Grade F
	var score = parseFloat(document.getElementById("score").value); // Convert to a number
	var grade = "";

	if (score >= 90) {
		grade = "Grade A";
	} else if (score >= 75) {
		grade = "Grade B";
	} else if (score >= 50) {
		grade = "Grade C";
	} else {
		grade = "Grade F";
	}

	document.getElementById("result").innerText = grade;
}
