const demo = document.getElementById("demo");

const statements = [
	"'5' + '10' = " + ("5" + "10"),
	"5 + '10' = " + (5 + "10"),
	"5 + 5 + '10' = " + (5 + 5 + "10"),
	"'5' + 10 = " + ("5" + 10),
	"true + 10 = " + (true + 10),
	"false + 10 = " + (false + 10),
	"5 + null = " + (5 + null),
	"5 + undefined = " + (5 + undefined),
	"'5' + null = " + ("5" + null),
	"{} + '10' = " + ({} + "10"),
	"Symbol('A') + '10' = Error! (Can't add a Symbol to a string)",
];

statements.map((statement) => {
    let temp_ele = document.createElement("p");
    temp_ele.innerHTML = `${statement}`;

    demo.appendChild(temp_ele);
});