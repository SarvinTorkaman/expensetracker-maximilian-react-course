import React, {useState} from 'react';
import NewExpenseForm from './NewExpenseForm';
import "./NewExpense.css";
const NewExpense =(props)=> {
    const [isEditing, setIsEditing]=useState(false)
    const savedExpenseHandler = (savedExpense)=>{

        savedExpense ={
            ...savedExpense,
            id:Math.random().toString()
        }


        props.onAddedExpense(savedExpense)
        setIsEditing(false)

    }

const startEditingHandler=()=>{
    setIsEditing(true)
}
const cancelEditingHandler=()=>{
    setIsEditing(false)

}

return <div className='new-expense'>
   {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
    {isEditing && < NewExpenseForm onSavedExpense={savedExpenseHandler} onCancel={cancelEditingHandler}/>}
</div>

}
export default NewExpense;