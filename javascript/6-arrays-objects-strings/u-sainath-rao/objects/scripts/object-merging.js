function deepMerging(obj1, obj2) {
	for (let key in obj2) {
		if (typeof obj2[key] === "object" && typeof obj1[key] === "object") {
			obj1[key] = deepMerging(obj1[key], obj2[key]);
		} else {
			obj1[key] = obj2[key];
		}
	}
	return obj1;
}

let merged = deepMerging({ a: 1, b: { x: 10 } }, { b: { y: 20 }, c: 3 });

document.getElementById("output").innerHTML = `
	Array 1: { a: 1, b: { x: 10 } } <br>
	Array 2: { b: { y: 20 }, c: 3 } <br>

	Merged: ${JSON.stringify(merged)}
`;
