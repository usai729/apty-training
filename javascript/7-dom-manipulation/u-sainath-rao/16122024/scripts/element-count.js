const highLevelElements = document.body.children;
let element_count = {};

function countNodes(element) {
	for (let i = 0; i < element.length; i++) {
		let tagname = element[i].tagName.toLowerCase();

		if (element_count[tagname]) {
			element_count[tagname] += 1;
		} else {
			element_count[tagname] = 1;
		}

		if (element[i].children.length > 0) {
			countNodes(element[i].children);
		}
	}
}

countNodes(highLevelElements);

const p = document.createElement("p");
p.textContent =
	"Count of the elements of page: " + JSON.stringify(element_count);

document.body.appendChild(p);
