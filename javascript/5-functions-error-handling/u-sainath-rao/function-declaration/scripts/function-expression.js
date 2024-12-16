const sort = function (arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}

	return arr;
};

let sorted_array = sort([1, 3, 2, 5, 6, 3, 7, 8, 9, 0]);
const output_element = document.getElementById("demo");

output_element.innerHTML = sorted_array.join(", ");
