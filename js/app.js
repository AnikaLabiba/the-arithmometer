
// adding eventlistener on Calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    //getting input fields
    const incomeInput = document.getElementById('income-input').value;

    const foodInput = document.getElementById('food-input').value;
    const clothesInput = document.getElementById('clothes-input').value;
    const rentInput = document.getElementById('rent-input').value;


    //getting expense and balance innerText
    const totalExpenses = document.getElementById('total-expenses');

    const totalBalance = document.getElementById('total-balance');

    //calculating total expenses
    const expense = parseFloat(foodInput) + parseFloat(clothesInput) + parseFloat(rentInput);
    totalExpenses.innerText = expense;

    //calculating total balance
    const balance = parseFloat(incomeInput) - expense;
    totalBalance.innerText = balance;



})