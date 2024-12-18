const highLevelNodes = document.body.children;
let nested_count = {};

function countChildNodesForEach(element) {
	let len = element.length;

	for (let i = 0; i < len; i++) {
		if (element[i].children.length > 0) {
			nested_count[element[i].tagName] =
				element[i].children.length + " Child nodes";

			countChildNodesForEach(element[i].children);
		} else {
			nested_count[element[i].tagName] = "0 Child nodes";
		}
	}
}

countChildNodesForEach(highLevelNodes);

let formattedOutput = "Count of the elements on the page:<br><br>";
for (const [tag, count] of Object.entries(nested_count)) {
	formattedOutput += `${tag}: ${count}<br>`;
}

const p = document.createElement("p");
p.innerHTML = formattedOutput;

document.body.appendChild(p);
