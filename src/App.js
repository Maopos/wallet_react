import React, { useState } from 'react';
import Question from './component/Question';
import Form from './component/Form';



function App() {

  // Define State
  const [ budget, saveBudget] = useState(0);
  const [ remaining, saveRemaining] = useState(0);
  const [ showQuestion, updateQuestion ] = useState(true)


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
                  <Form></Form>
              </div>

              <div className="one-half column">
                2
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
