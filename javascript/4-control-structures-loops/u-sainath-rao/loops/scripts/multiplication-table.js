window.onload = () => {
	const div = document.getElementById("demo");

	for (let i = 1; i <= 19; i++) {
		for (let j = 0; j <= 10; j++) {
			const p = document.createElement("p");
			p.textContent = `${i} * ${j} = ${i * j}`;
			div.appendChild(p);
		}

		div.appendChild(document.createElement("br"));
	}
};
