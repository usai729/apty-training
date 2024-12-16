function deepClone(og_obj) {
	let clone = {};

	Object.keys(og_obj).map((key) => {
		if (typeof og_obj[key] === "object") {
			clone[key] = deepClone(og_obj[key]);
		} else {
			clone[key] = og_obj[key];
		}
	});

	return clone;
}

let obj = { a: 1, b: { c: 2 } };

let clone = deepClone(obj);

clone.b.c = 3;

document.getElementById("output").innerHTML = `<b>Clone:</b> ${JSON.stringify(
	clone
)} <br><b>Original Object:</b> ${JSON.stringify(obj)}`;
