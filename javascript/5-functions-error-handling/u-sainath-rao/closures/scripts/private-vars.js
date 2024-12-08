function bank(mode, balance = 0) {
	let output = document.getElementById("output");
	let available_balance = 0;

	if ((mode === "deposit" || mode === "withdraw") && balance <= 0) {
		output.innerHTML = "Invalid balance amount!";
		return;
	}

	switch (mode) {
		case "deposit":
			available_balance += parseInt(balance);
			output.innerHTML = "Transaction Successful!";
			break;

		case "withdraw":
			if (available_balance >= parseInt(balance)) {
				available_balance -= parseInt(balance);
				output.innerHTML = `Transaction Successful, you withdrew Rs. ${balance}`;
			} else {
				output.innerHTML = "Insufficient balance";
			}
			break;

		case "view":
			output.innerHTML = "Available balance: Rs." + available_balance;
			break;

		default:
			break;
	}
}

document.getElementById("next").addEventListener("click", () => {
	const balance = document.getElementById("balance").value;
	const mode = document.getElementById("mode").value;

	bank(mode, balance);
});
