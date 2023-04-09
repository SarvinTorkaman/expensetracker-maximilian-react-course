import React, {useState} from 'react';
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
export default function Expenses(props){
    const [selectedYear, setSelectedYear] = useState("All");
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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList  expensesList= {filteredExpenses}/>

</Card>
</div>


)
}