function onaddexpense(event){
    event.preventDefault();
    let amount = document.getElementById('amount').value;
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;


let expense = {
    amount: amount,
    description: description,
    category: category
}
    let key=document.getElementById('description').value;
    let expenseJSON = JSON.stringify(expense);
    localStorage.setItem(key,expenseJSON)
    showExpenseOnScreen(expense);
}

function showExpenseOnScreen(expense){
    let parentElement = document.getElementById('history');
    let childElement = document.createElement('li');
    childElement.textContent = expense.amount+ '-' + expense.description + '-' + expense.category;

    var deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value='Delete';

    deleteBtn.onclick = () => {
        localStorage.removeItem(expense.description);
        parentElement.removeChild(childElement);
    }

    var edit = document.createElement('input');
    edit.type = 'button';
    edit.value='Edit';

    edit.onclick = () => {
        let editexpense = JSON.parse(localStorage.getItem(expense.description));
        document.getElementById('amount').value=editexpense.amount;
        document.getElementById('description').value=editexpense.description;
        document.getElementById('category').value=editexpense.category;
        
        localStorage.removeItem(expense.description);
        parentElement.removeChild(childElement);
    }
    childElement.appendChild(edit);
    childElement.appendChild(deleteBtn);
    parentElement.appendChild(childElement);
}