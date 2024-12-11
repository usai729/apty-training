function join(arr) {
	const str = arr.join(" ");

	return str.slice(0, 1).toUpperCase() + str.slice(1);
}

document.getElementById("submit").addEventListener("click", (event) => {
	const input = document.getElementById("input").value;

	document.getElementById("output").textContent = join(input.split(" "));
});
