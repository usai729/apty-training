function update_items() {
	const ul = document.querySelector("ul");
	const ul_children = ul.children;

	for (i = 0; i <= ul_children.length; i++) {
		if (i == 1 || i == 3) {
			ul_children[i].textContent = "Updated content...";
		}
	}
}
