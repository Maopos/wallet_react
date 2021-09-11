import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Form = ({saveExpense, saveCreateExpense}) => {

const [ expenseName, saveExpenseName ] = useState('');
const [ expenseAmount, saveExpenseAmount ] = useState(0);
const [ error, saveError ] = useState(false);



// Add expense by user
const addExpense = (e) => {
    e.preventDefault();

    // Validate
    if (expenseAmount < 1 || isNaN(expenseAmount) || expenseName.trim() === '') {
        saveError(true)
        return;
    }

    saveError(false)

    // construct expense
    const expense = {
        expenseName,
        expenseAmount,
        id: shortid.generate() // npm install shortid - import shortid from 'shortid';
    }
    

    // expense to ppal component
    saveExpense(expense);
    saveCreateExpense(true);

    // reset form
    saveExpenseAmount(0);
    saveExpenseName('');
}
 
    return ( 
        <form 
            action=""
            onSubmit={addExpense}
            >
            <h2>Type your expenses here...</h2>

            {error ? <Error message="Incorrect Expense Amount..."/> : null}

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

Form.propTypes = {
    saveExpense: PropTypes.func.isRequired, 
    saveCreateExpense: PropTypes.func.isRequired
}
 
export default Form;