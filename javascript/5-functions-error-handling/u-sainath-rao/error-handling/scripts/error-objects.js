let available_balance = 0;

function withdrawAmount(accountBalance, withdrawalAmount) {
	if (withdrawalAmount > accountBalance) {
		throw {
			errorCode: 101,
			errorMessage: "Withdrawal amount exceeds available balance.",
		};
	}
	return accountBalance - withdrawalAmount;
}

function bank(mode, balance = 0) {
	let output = document.getElementById("output");

	balance = parseInt(balance);

	if ((mode === "deposit" || mode === "withdraw") && balance <= 0) {
		output.innerHTML = "Invalid balance amount!";
		return;
	}

	switch (mode) {
		case "deposit":
			available_balance += balance;
			output.innerHTML = "Transaction Successful!";
			break;

		case "withdraw":
			try {
				available_balance = withdrawAmount(available_balance, balance);
				output.innerHTML = `Transaction Successful, you withdrew Rs. ${balance}`;
			} catch (error) {
				output.innerHTML = `Error Code: ${error.errorCode}, Message: ${error.errorMessage}`;
			}
			break;

		case "view":
			output.innerHTML = `Available balance: Rs. ${available_balance}`;
			break;

		default:
			output.innerHTML = "Invalid transaction mode!";
			break;
	}
}

document.getElementById("next").addEventListener("click", () => {
	const balance = document.getElementById("balance").value;
	const mode = document.getElementById("mode").value;

	bank(mode, balance);
});
