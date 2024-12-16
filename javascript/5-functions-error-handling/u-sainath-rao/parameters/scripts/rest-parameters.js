function sum(...args) {
	let sum = 0;

	args.forEach((element) => {
		sum += element;
	});

	document.getElementById("demo").innerHTML = sum;
}

function sumIt() {
	const array_text = document.getElementById("array").value;
	let arr = String(array_text).split(",");

	arr = arr.map((ele) => {
		return Number(ele);
	});

	sum(...arr);
}
