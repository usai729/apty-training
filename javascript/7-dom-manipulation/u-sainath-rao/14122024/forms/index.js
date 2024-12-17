let mode = "login";

const container = document.querySelector(".container");

const selectors = document.createElement("div");
selectors.className = "selector-group";

function showLoginForm() {
	document.title = "Login";

	const signupform = document.querySelector(".signup-form");
	if (signupform) {
		container.removeChild(signupform);
	}

	if (!document.querySelector(".login-form")) {
		const form = document.createElement("form");
		form.className = "login-form";

		form.addEventListener("submit", (e) => {
			e.preventDefault();

			const username = e.target.elements.username.value;
			const password = e.target.elements.password.value;
			const rememberMe = e.target.elements.rememberMe.checked;

			if (!username.trim() || !password.trim()) {
				window.alert("Please enter both username and password.");
				return;
			}

			console.log("Login successful:", { username, password, rememberMe });
		});

		const input_username = document.createElement("input");
		input_username.type = "text";
		input_username.name = "username";
		input_username.placeholder = "Username";
		input_username.required = true;

		const input_password = document.createElement("input");
		input_password.type = "password";
		input_password.name = "password";
		input_password.placeholder = "Password";
		input_password.required = true;

		const rememberMeLabel = document.createElement("label");
		rememberMeLabel.textContent = "Remember me";
		const rememberMe = document.createElement("input");
		rememberMe.type = "checkbox";
		rememberMe.name = "rememberMe";
		rememberMeLabel.style.color = "white";
		rememberMeLabel.appendChild(rememberMe);

		const submit = document.createElement("button");
		submit.type = "submit";
		submit.textContent = "Login";

		form.appendChild(input_username);
		form.appendChild(input_password);
		form.appendChild(rememberMeLabel);
		form.appendChild(submit);

		container.appendChild(form);
	}
}

function showSignupForm() {
	document.title = "Signup";

	const loginForm = document.querySelector(".login-form");
	if (loginForm) {
		container.removeChild(loginForm);
	}

	const form = document.createElement("form");
	form.className = "signup-form";

	const firstname = document.createElement("input");
	firstname.placeholder = "First Name";
	firstname.name = "firstname";

	const lastname = document.createElement("input");
	lastname.placeholder = "Last Name";
	lastname.name = "lastname";

	const input_email = document.createElement("input");
	input_email.placeholder = "Email";
	input_email.name = "email";

	const input_password = document.createElement("input");
	input_password.type = "password";
	input_password.placeholder = "Password";
	input_password.name = "password";

	let genderLabel = document.createElement("label");
	genderLabel.innerText = "Gender:";

	let maleGender = document.createElement("input");
	maleGender.type = "radio";
	maleGender.name = "gender";
	maleGender.value = "Male";
	maleGender.required = true;

	let maleLabel = document.createElement("label");
	maleLabel.innerText = "Male";
	maleLabel.style.marginLeft = "5px";
	maleLabel.style.marginRight = "10px";
	maleLabel.style.color = "white";

	let femaleGender = document.createElement("input");
	femaleGender.type = "radio";
	femaleGender.name = "gender";
	femaleGender.value = "Female";

	let femaleLabel = document.createElement("label");
	femaleLabel.innerText = "Female";
	femaleLabel.style.marginLeft = "5px";
	femaleLabel.style.color = "white";

	let genderContainer = document.createElement("div");
	genderContainer.style.display = "flex";
	genderContainer.style.alignItems = "center";
	genderContainer.style.fontSize = "15px";
	genderContainer.style.justifyContent = "center";

	genderContainer.append(
		genderLabel,
		maleGender,
		maleLabel,
		femaleGender,
		femaleLabel
	);
	form.append(genderContainer);

	const submit = document.createElement("button");
	submit.type = "submit";
	submit.textContent = "Signup";

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const firstnameValue = e.target.elements.firstname.value;
		const lastnameValue = e.target.elements.lastname.value;
		const emailValue = e.target.elements.email.value;
		const passwordValue = e.target.elements.password.value;

		if (
			!firstnameValue.trim() ||
			!lastnameValue.trim() ||
			!emailValue.trim() ||
			!passwordValue.trim()
		) {
			window.alert("Please fill in all fields.");
			return;
		}

		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!emailRegex.test(emailValue)) {
			window.alert("Please enter a valid email address.");
			return;
		}

		console.log("Signup successful:", {
			firstnameValue,
			lastnameValue,
			emailValue,
			passwordValue,
		});
	});

	form.appendChild(firstname);
	form.appendChild(lastname);
	form.appendChild(input_email);
	form.appendChild(input_password);
	form.appendChild(submit);

	container.appendChild(form);
}

["old", "new"].forEach((type) => {
	let button = document.createElement("button");
	button.textContent = type == "new" ? "New User" : "Old User";
	button.className = type == "old" ? "active" : "";
	button.id = "selector-btns";

	button.addEventListener("click", (e) => {
		const allButtons = document.querySelectorAll(".selector-group button");
		allButtons.forEach((btn) => btn.classList.remove("active"));

		e.target.classList.add("active");

		mode = type == "new" ? "signup" : "login";

		if (mode == "login") {
			showLoginForm();
		} else {
			showSignupForm();
		}
	});

	selectors.appendChild(button);
});

container.appendChild(selectors);

showLoginForm();
