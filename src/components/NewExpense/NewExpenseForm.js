import React from 'react-dom';
import './NewExpenseForm.css';

const NewExpenseForm = (props) => {
return <form >
    <div className='new-expense__controls'>
        <div className='new-expense__control'> 
            <label> Title </label>
            < input type='text'></input>
        </div>
      
        <div className='new-expense__control'>    
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01'></input>


        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2021-07-01' max='2023-12-31'></input>
            </div>

        </div> 
    <div className='new-expense__actions'>
        <button type='submit'> Add Expense</button>
    </div>

</form>
}
export default NewExpenseForm;