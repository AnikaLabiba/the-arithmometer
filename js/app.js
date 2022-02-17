
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

    //calculating total expenses
    const expense = parseFloat(foodInput) + parseFloat(clothesInput) + parseFloat(rentInput);
    totalExpenses.innerText = expense;
    return expense;

}

//calculating total balance
function calculateTotalBalance() {
    //getting input fields
    const incomeInput = document.getElementById('income-input').value;
    const totalBalance = document.getElementById('total-balance');

    //getting expenses value
    const expenseTotal = calculateTotalExpenses();

    //calculating total balance
    const balance = parseFloat(incomeInput) - expenseTotal;
    totalBalance.innerText = balance;
    return balance;

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

    const saving = (savingValue / 100) * incomeValue
    savingAmount.innerText = saving;

    const balance = calculateTotalBalance();
    remainingBalance.innerText = balance - saving;
}

