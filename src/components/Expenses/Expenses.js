import React, {useState} from 'react';
import ExpenseItems from './ExpenseItems';
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
export default function Expenses(props){
    const [selectedYear, setSelectedYear] = useState("2020");
    // const [expenses,setExpenses]=useState(props.expenses)


    const selectYearHandler = (year) =>{
        setSelectedYear(year);
        
        

    }
    let filteredExpenses=[]

    if (selectedYear==="All"){
         filteredExpenses=(props.expenses)
    }
    else
    {      

         filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);
       
    }

return(
    <div>
        <Card className='expenses'>   
        <ExpensesFilter value={selectedYear} onSelectYear= {selectYearHandler}  />
        {filteredExpenses.map((expense)=> {return <ExpenseItems key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>})}


</Card>
</div>


)
}