// adding eventlistener on Calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input').value;
    // const incomeAmount = parseFloat(incomeInput);
    const expense = calculateTotalExpenses();


    // if (expense > incomeInput) {
    //     notifyErrorAlert('insuficiantBalance');
    // }
    // else {
    //     calculateTotalBalance();
    //     closeErrorAlert('insuficiantBalance');
    // }


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
        closeErrorAlert('forPositive');

        return expense;
    }
    else if (foodInput == '' || clothesInput == '' || rentInput == '') {
        notifyErrorAlert('forPositive');
    }

}

//calculating total balance
function calculateTotalBalance() {
    //getting input fields
    const incomeInput = document.getElementById('income-input').value;
    const incomeAmount = parseFloat(incomeInput);
    const totalBalance = document.getElementById('total-balance');

    //getting expenses value
    const expenseTotal = calculateTotalExpenses();

    // cheching if income amount is valid or not
    if (incomeAmount < 0 && typeof (expenseTotal) != 'number') {
        notifyErrorAlert('forPositive');
    }
    else {
        //calculating total balance
        const balance = incomeAmount - expenseTotal;
        totalBalance.innerText = balance;
        closeErrorAlert('forPositive');
        return balance;

    }
}
//eventListener on save button
document.getElementById('save-btn').addEventListener('click', function () {

    const remainingBalance = document.getElementById('remaining-balance');

    const saving = calculateSavings();
    const balance = calculateTotalBalance();

    if (saving > balance) {
        notifyErrorAlert('insuficiantBalance');

    }
    else {
        remainingBalance.innerText = balance - saving;
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



    //cheking if inputs are positive
    if (savingValue > 0) {
        const saving = (savingValue / 100) * incomeValue;
        savingAmount.innerText = saving;
        closeErrorAlert('forPositive');
        return saving;
    }
    else {
        notifyErrorAlert('forPositive');

    }

}



// Error handling js//------->

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

// function isBigger() {
    
// }








