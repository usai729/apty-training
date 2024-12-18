function action(var1, var2, var3) {
	function inner_1() {
		function inner_2() {
			function inner_3() {
				return String(var1) + var2 + var3;
			}

			return inner_3();
		}

		return inner_2();
	}

	return inner_1();
}

document.getElementById("submit").addEventListener("click", () => {
	const var1 = document.getElementById("var1").value;
	const var2 = document.getElementById("var2").value;
	const var3 = document.getElementById("var3").value;

	document.getElementById("output").innerHTML = action(var1, var2, var3);
});
