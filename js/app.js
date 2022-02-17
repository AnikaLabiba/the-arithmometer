// adding eventlistener on Calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {

    calculateTotalExpenses();
    calculateTotalBalance()
})
//calculating expenses
function calculateTotalExpenses() {
    const foodInput = document.getElementById('food-input').value;
    const clothesInput = document.getElementById('clothes-input').value;
    const rentInput = document.getElementById('rent-input').value;

    const totalExpenses = document.getElementById('total-expenses');
    // const calculateBtn = document.getElementById('calculate-btn');

    if (foodInput > 0 && clothesInput > 0 && rentInput > 0) {
        //calculating total expenses
        const expense = parseFloat(foodInput) + parseFloat(clothesInput) + parseFloat(rentInput);
        totalExpenses.innerText = expense;
        closeErrorAlert()
        return expense;
    }
    else {
        notifyNegativeError();


    }
}

//calculating total balance
function calculateTotalBalance() {
    //getting input fields
    const incomeInput = document.getElementById('income-input').value;
    const incomeAmount = parseFloat(incomeInput);
    const totalBalance = document.getElementById('total-balance');

    const calculateBtn = document.getElementById('calculate-btn');
    //getting expenses value
    const expenseTotal = calculateTotalExpenses();

    // cheching if income amount is valid or not
    if (incomeAmount < 0 || typeof (expenseTotal) != 'number') {
        notifyNegativeError();
    }
    else {
        //calculating total balance
        const balance = parseFloat(incomeAmount) - expenseTotal;
        totalBalance.innerText = balance;
        closeErrorAlert()
        return balance;

    }
}
//calculating savings
function calculateSavings() {
    //getting income value
    const incomeInput = document.getElementById('income-input').value;
    const incomeValue = parseFloat(incomeInput);
    //getting  saving input and remainging balance 
    const savingInput = document.getElementById('saving-input').value;
    const savingValue = parseFloat(savingInput);
    const savingAmount = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');

    //cgeking if inputs are positive
    if (incomeValue > 0 && savingValue > 0) {
        const saving = (savingValue / 100) * incomeValue
        savingAmount.innerText = saving;

        const balance = calculateTotalBalance();
        remainingBalance.innerText = balance - saving;
        closeErrorAlert()
        return saving;
    }
    else {
        notifyNegativeError();
    }
}

// Error handling js//------->

// handling negative number as input
function notifyNegativeError() {
    const notifyNegative = document.getElementById('notify-negative');
    notifyNegative.style.display = 'block';
}
//hiding error notification
function closeErrorAlert() {
    const notifyNegative = document.getElementById('notify-negative');
    notifyNegative.style.display = 'none';
}





