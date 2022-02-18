// adding eventlistener on Calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    calculateTotalExpenses();
    calculateTotalBalance();
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
            closeErrorAlert('forPositive')
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


// handling negative number as input
function notifyErrorAlert(error) {
    const errorAlert = document.getElementById('notify-' + error);
    errorAlert.style.display = 'block';
}
//hiding error notification
function closeErrorAlert(error) {
    const errorAlert = document.getElementById('notify-' + error);
    errorAlert.style.display = 'none';
}