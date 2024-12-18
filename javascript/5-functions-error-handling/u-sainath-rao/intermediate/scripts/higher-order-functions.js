function callback(content) {
	const li = document.createElement("li");
	li.innerHTML = content;

	return li;
}

function repeatAction(cb, times) {
	const ul = document.createElement("ul");

	for (let i = 0; i < times; i++) {
		let temp = cb(`item-${i}`);

		ul.appendChild(temp);
	}

	document.getElementById("demo").appendChild(ul);
}

repeatAction(callback, 5);
