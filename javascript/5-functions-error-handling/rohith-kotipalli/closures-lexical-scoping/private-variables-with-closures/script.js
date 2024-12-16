const createBankAccount = () => {
    let balance = 0; 

    return {
        deposit: (amount) => {
            if (amount > 0) {
                balance += amount;
                return `Deposited: $${amount}`;
            } else {
                return 'Deposit amount must be positive.';
            }
        },
        withdraw: (amount) => {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return `Withdrew: $${amount}`;
            } else if (amount > balance) {
                return 'Insufficient funds.';
            } else {
                return 'Withdrawal amount must be positive.';
            }
        },
        checkBalance: () => {
            return `Current Balance: $${balance}`;
        }
    };
};


const myBankAccount = createBankAccount();

document.getElementById('depositButton').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amountInput').value);
    const resultMessage = myBankAccount.deposit(amount);
    document.getElementById('result').innerText = resultMessage + '\n' + myBankAccount.checkBalance();
});

document.getElementById('withdrawButton').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amountInput').value);
    const resultMessage = myBankAccount.withdraw(amount);
    document.getElementById('result').innerText = resultMessage + '\n' + myBankAccount.checkBalance();
});

document.getElementById('checkBalanceButton').addEventListener('click', () => {
    document.getElementById('result').innerText = myBankAccount.checkBalance();
});