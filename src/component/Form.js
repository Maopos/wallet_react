import React, { useState } from 'react';


const Form = () => {

const [ expenseName, saveExpenseName ] = useState('');
const [ expenseAmount, saveExpenseAmount ] = useState(0);

// Add expense by user
const addExpense = (e) => {
    e.preventDefault();

    // Validate

    // construct expense

    // expense to ppal component

    // reset form
}
 
    return ( 
        <form 
            action=""
            onSubmit={addExpense}
            >
            <h2>Type your expenses here...</h2>

            <div className="campo">
                <label htmlFor="">Expense name</label>
                <input 
                    type="text" 
                    placeholder="e.g. Transportation"
                    className="u-full-width" 
                    value={expenseName} 
                    onChange = {e => saveExpenseName(e.target.value)}                  
                />
            </div>

            <div className="campo">
                <label htmlFor="">Expense amount</label>
                <input 
                    type="number" 
                    placeholder="e.g. 300"
                    className="u-full-width"
                    value={expenseAmount}
                    onChange = {e => saveExpenseAmount(parseInt(e.target.value, 10))}                    
                />
            </div>

            <input 
                type="submit" 
                className="button-primary u-full-width"
                value="Add Expense"
                />
        </form>
     );
}
 
export default Form;