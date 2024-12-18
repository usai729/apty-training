const submit_btn = document.getElementById("submit");

window.onload = () => {
	submit_btn.click();
};

submit_btn.addEventListener("click", () => {
	let text = document.getElementById("str").value;
	let unicodes = [];

	for (let i = 0; i < text.length; i++) {
		unicodes.push(text.charCodeAt(i));
	}

	document.getElementById("output").textContent = JSON.stringify(unicodes);
});
