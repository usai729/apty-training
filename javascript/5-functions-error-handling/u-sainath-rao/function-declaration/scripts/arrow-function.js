document.getElementById("demo").addEventListener("click", (event) => {
	console.log(event);

	window.alert("Hello");
});

document.addEventListener("mousemove", (event) => {
	const div = document.getElementById("demo-mousemovement");
	const p = document.createElement("p");

	p.textContent = `Mouse position: (${event.clientX}, ${event.clientY})`;

	div.appendChild(p);
});
