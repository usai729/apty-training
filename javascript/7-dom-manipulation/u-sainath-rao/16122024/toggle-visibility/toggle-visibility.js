const divs = document.querySelectorAll(".square");
let current_active = 1;

function toggle() {
	switch (current_active) {
		case 1:
			divs[1].style.visibility = "visible";
			divs[0].style.visibility = "hidden";
			divs[2].style.visibility = "hidden";

			current_active = 2;

			break;
		case 2:
			divs[1].style.visibility = "hidden";
			divs[0].style.visibility = "hidden";
			divs[2].style.visibility = "visible";

			current_active = 3;

			break;
		case 3:
			divs[1].style.visibility = "hidden";
			divs[0].style.visibility = "visible";
			divs[2].style.visibility = "hidden";

			current_active = 1;

			break;

		default:
			break;
	}
}
