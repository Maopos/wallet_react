import React, { Fragment, useState } from 'react';
import Error from './Error';


const Question = ({saveBudget, saveRemaining, updateQuestion}) => {

    //Define state
    const [amount, saveAmount] = useState(0);
    const [ error, saveError ] = useState(false);

    // read the bugdet
    const defineBudget = (e) => {
        saveAmount(parseInt(e.target.value, 10));
        
    }

    // Submit to define budget
    const addBudget = (e) => {
        e.preventDefault();

        // Validate
        if (amount < 1 || isNaN(amount)) {
            saveError(true)
            return;
        }

        // if validation pass
        saveError(false);
        saveBudget(amount);
        saveRemaining(amount)
        updateQuestion(false)

        
    }

    return ( 
        <Fragment>
            <h2>Your budget here</h2>

            {error ? <Error message="Incorrect Amount..."/> : null}

            <form
                onSubmit={addBudget}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Budget"
                    onChange={defineBudget}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width" 
                    value="Define budget"
                />
            </form>
        </Fragment>
     );
}
 
export default Question;