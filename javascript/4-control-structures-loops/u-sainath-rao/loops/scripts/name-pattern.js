var nameArray = {
	S: [
		["S", "S", "S", "S", "S"],
		["S", " ", " ", " ", " "],
		["S", "S", "S", "S", "S"],
		[" ", " ", " ", "S", "S"],
		["S", "S", "S", "S", "S"],
	],
	A: [
		[" ", "A", "A", "A", " "],
		[" ", "A", " ", "A", " "],
		[" ", "A", "A", "A", " "],
		[" ", "A", " ", "A", " "],
		[" ", "A", " ", "A", " "],
	],
	I: [
		["I", "I", "I", "I", "I"],
		[" ", " ", "I", " ", " "],
		[" ", " ", "I", " ", " "],
		[" ", " ", "I", " ", " "],
		["I", "I", "I", "I", "I"],
	],
};

var name = "SAI";
var pattern = "";

for (let i = 0; i < 5; i++) {
	for (let letter of name) {
		pattern += nameArray[letter][i].join("") + " ";
	}
	pattern += "\n";
}

document.getElementById("namePattern").textContent = pattern;
