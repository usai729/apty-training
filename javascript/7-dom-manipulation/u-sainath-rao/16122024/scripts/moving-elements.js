const table = document.querySelector("table");
let row;

for (let i = 1; i <= 10; i++) {
	row = document.createElement("tr");
	let tdata = document.createElement("td");
	let p = document.createElement("p");

	p.innerHTML = i;

	["Up", "Down", "Top", "Bottom"].map((element) => {
		let btn = document.createElement("button");

		btn.className = `btn-${element}-${i}`;
		btn.innerHTML = element;
		btn.addEventListener("click", () => {
			move(btn, row);
		});

		tdata.appendChild(btn);
	});

	tdata.appendChild(p);
	row.appendChild(tdata);
	table.appendChild(row);
}

function move(btn, row) {
	const rows = Array.from(table.querySelectorAll("tr"));
	const currentRowIndex = rows.indexOf(row);
	const mode = btn.className.split("-")[1].toLowerCase();

	switch (mode) {
		case "up":
			if (currentRowIndex > 0) {
				table.insertBefore(row, rows[currentRowIndex - 1]);
			}
			break;
		case "down":
			if (currentRowIndex < rows.length - 1) {
				table.insertBefore(rows[currentRowIndex + 1], row);
			}
			break;
		case "top":
			if (currentRowIndex > 0) {
				table.insertBefore(row, rows[0]);
			}
			break;
		case "bottom":
			if (currentRowIndex < rows.length - 1) {
				table.appendChild(row);
			}
			break;
	}
}
