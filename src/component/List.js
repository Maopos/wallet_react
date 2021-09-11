import React from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types';

const List = ({expenses}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Expenses List</h2>
            {expenses.map(i => (
                <Expense 
                    key={i.id}
                    expense={i}
                />
            ))}
        </div>
     );
}

List.propTypes = {
    expenses: PropTypes.array.isRequired
}
 
export default List;
