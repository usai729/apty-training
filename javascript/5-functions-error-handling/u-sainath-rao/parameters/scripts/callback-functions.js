function dcb(str) {
	return str.toUpperCase();
}

function translateToUpper(cb = dcb, str = "default") {
	return cb(str);
}

document.getElementById("click").addEventListener("click", () => {
	console.log(translateToUpper(dcb));
});
