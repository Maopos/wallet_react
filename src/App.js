import React, { useState, useEffect } from 'react';
import Question from './component/Question';
import Form from './component/Form';
import List from './component/List';
import BudgetControl from './component/BudgetControl';



function App() {

  // Define State
  const [ budget, saveBudget] = useState(0);
  const [ remaining, saveRemaining] = useState(0);
  const [ showQuestion, updateQuestion ] = useState(true);
  const [ expenses, saveExpenses ] = useState([]);
  const [ expense, saveExpense ] = useState({});
  const [ createExpense, saveCreateExpense ] = useState(false);
  

  // subtract expenses from budget with useEffect
  useEffect(() => {
    if (createExpense) {

      // Add new Budget
      saveExpenses([
        ...expenses,
        expense
      ]);

      // Substract expense from budget
      const remainingBudget = remaining - expense.expenseAmount;
      saveRemaining(remainingBudget);

      // reset to false
      saveCreateExpense(false)
    }
  }, [expense, createExpense, expenses, remaining]);


  


  return (
    <div className="container">
      <header>
        <h1>Wallet App</h1>
        <div className="contenido-principal contenido">
          { showQuestion ? 
          (
            <Question
                saveBudget={saveBudget}
                saveRemaining={saveRemaining}
                updateQuestion={updateQuestion}
            ></Question>
            
          ) : 
          (
            <div className="row">
              <div className="one-half column">
                  <Form
                    saveExpense = {saveExpense}
                    saveCreateExpense={saveCreateExpense} 
                  ></Form>
              </div>

              <div className="one-half column">
                <List 
                  expenses={expenses} 
                />

                <BudgetControl 
                  budget={budget}
                  remaining={remaining}
                />
              </div>
            </div>
          )
            
            }
            

            

        </div>
      </header>
    </div>
  );
}

export default App;
