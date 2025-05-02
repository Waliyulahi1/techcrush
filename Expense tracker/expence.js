let totalExpenses = 0;

const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total-expenses');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    // Add to the expense list
    const listItem = document.createElement('li');
    listItem.textContent = `${expenseName}: $${expenseAmount}`;
    expenseList.appendChild(listItem);

    // Update total expenses
    totalExpenses += expenseAmount;
    totalDisplay.textContent = totalExpenses.toFixed(2);

    // Clear input fields
    expenseForm.reset();
});