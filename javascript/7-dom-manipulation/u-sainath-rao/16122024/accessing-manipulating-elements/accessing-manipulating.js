function changeTextColor() {
	const paragraphs = document.querySelectorAll('p[id^="para"]');
	paragraphs.forEach((p) => {
		p.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	});
}

function toggleClass() {
	const elements = document.getElementsByClassName("sameClass");
	Array.from(elements).forEach((element) => {
		element.classList.toggle("highlight");
	});
}

function changeInnerHTML() {
	const spans = document.getElementsByTagName("span");
	Array.from(spans).forEach((span) => {
		span.innerHTML = "Updated Content";
	});
}

function toggleDisabled() {
	const inputs = document.getElementsByName("user1");
	inputs.forEach((input) => {
		input.disabled = !input.disabled;
	});
}

function addCustomAttribute() {
	const elements = document.querySelectorAll("[data-custom]");
	elements.forEach((element) => {
		element.setAttribute("data-new", "new-value");

		console.log(element.getAttribute("data-new"));
	});
}
