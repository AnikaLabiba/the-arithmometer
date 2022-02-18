// adding eventlistener on Calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    const balanceInput = document.getElementById('income-input').value;
    const incomeAmount = parseFloat(balanceInput);
    const expenses = calculateTotalExpenses();
    calculateTotalBalance();
    if (incomeAmount > 0 && expenses > incomeAmount) {
        notifyErrorAlert('insuficiantIncome');
    }
    else {
        closeErrorAlert('insuficiantIncome');

    }

})

//calculating expenses
function calculateTotalExpenses() {
    //getting input values
    const foodInput = document.getElementById('food-input').value;
    const foodValue = parseFloat(foodInput);
    const clothesInput = document.getElementById('clothes-input').value;
    const clothesvalue = parseFloat(clothesInput);
    const rentInput = document.getElementById('rent-input').value;
    const rentValue = parseFloat(rentInput);

    const totalExpenses = document.getElementById('total-expenses');

    //checking positive number 
    if (foodValue > 0 && clothesvalue > 0 && rentValue > 0) {
        const expenses = foodValue + clothesvalue + rentValue;
        if (isNaN != (expenses)) {
            totalExpenses.innerText = expenses;
            closeErrorAlert('forPositive');
            return expenses;
        }
    }
    else {
        notifyErrorAlert('forPositive');
    }
}

//calculating total balance
function calculateTotalBalance() {
    //getting input fields
    const incomeInput = document.getElementById('income-input').value;
    const incomeAmount = parseFloat(incomeInput);
    const totalBalance = document.getElementById('total-balance');

    const totalExpenses = calculateTotalExpenses();
    if (incomeAmount > 0 && totalExpenses > 0) {
        const balance = incomeAmount - totalExpenses;
        totalBalance.innerText = balance;
        closeErrorAlert('forPositive');
        return balance;
    }
    else {
        notifyErrorAlert('forPositive');
    }
}

//eventListener on save button
document.getElementById('save-btn').addEventListener('click', function () {
    const saving = calculateSavings();
    const balance = calculateTotalBalance();
    calculateRemainingBalance();

    if (saving > 0 && saving > balance) {
        notifyErrorAlert('insuficiantBalance');
    }
    else {
        closeErrorAlert('insuficiantBalance');
    }
})

//calculating savings
function calculateSavings() {
    //getting income value
    const incomeInput = document.getElementById('income-input').value;
    const incomeValue = parseFloat(incomeInput);
    //getting  saving input and remainging balance 
    const savingInput = document.getElementById('saving-input').value;
    const savingValue = parseFloat(savingInput);
    const savingAmount = document.getElementById('saving-amount');

    if (savingValue > 0 && incomeValue > 0) {
        const saving = (savingValue / 100) * incomeValue;
        savingAmount.innerText = saving;
        closeErrorAlert('forPositive');
        return saving;
    }
    else {
        notifyErrorAlert('forPositive');
    }
}

//calculating remainging balance
function calculateRemainingBalance() {
    const remainingBalanceField = document.getElementById('remaining-balance');
    const saving = calculateSavings();
    const balance = calculateTotalBalance();

    if (saving > 0 && balance > 0) {
        const remainingBalance = balance - saving;
        remainingBalanceField.innerText = remainingBalance;
        closeErrorAlert('forPositive');
        return remainingBalance;
    }
    else {
        notifyErrorAlert('forPositive');
    }
}

// showing error message
function notifyErrorAlert(error) {
    const errorAlert = document.getElementById('notify-' + error);
    errorAlert.style.display = 'block';
}
//hiding error message
function closeErrorAlert(error) {
    const errorAlert = document.getElementById('notify-' + error);
    errorAlert.style.display = 'none';
}