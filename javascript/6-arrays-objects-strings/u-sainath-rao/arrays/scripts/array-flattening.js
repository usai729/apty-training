let output_arr = [];
const div = document.getElementById("output");

function flat(arr) {
	arr.forEach((element) => {
		if (Array.isArray(element)) {
			return flat(element);
		}

		output_arr.push(element);
	});
}

document.getElementById("flattenButton").addEventListener("click", () => {
	const arr_str = document.getElementById("arrayInput").value;

	flat(JSON.parse(arr_str));

	div.innerHTML = `Input array: ${arr_str} <br>Output flattened: ${output_arr.join(
		", "
	)}`;
});
