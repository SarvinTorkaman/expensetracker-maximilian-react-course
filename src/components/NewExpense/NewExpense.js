import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import "./NewExpense.css";
const NewExpense =(props)=> {
    const savedExpenseHandler = (savedExpense)=>{

        savedExpense ={
            ...savedExpense,
            id:Math.random().toString()
        }


        props.onAddedExpense(savedExpense)

    }



return <div className='new-expense'>
    < NewExpenseForm onSavedExpense={savedExpenseHandler}/>
</div>

}
export default NewExpense;