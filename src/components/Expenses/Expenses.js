import React, {useState} from 'react';
import ExpenseItems from './ExpenseItems';
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
export default function Expenses(props){
    const [selectedYear, setSelectedYear] = useState("");


    const selectYearHandler = (year) =>{
        setSelectedYear(year);
        console.log(selectedYear);

    }


return(
    <div>
        <Card className='expenses'>   
        <ExpensesFilter onSelectYear= {selectYearHandler}  />
        {props.expenses.map((expense, index)=> {return <ExpenseItems key={index} title={expense.title} amount={expense.amount} date={expense.date}/>})}

    {/* < ExpenseItems title= {props.expenses[0].title} amount= {props.expenses[0].amount} date={props.expenses[0].date}/>
    < ExpenseItems title= {props.expenses[1].title} amount= {props.expenses[1].amount} date={props.expenses[1].date}/>
    < ExpenseItems title= {props.expenses[2].title} amount= {props.expenses[2].amount} date={props.expenses[2].date}/>
    < ExpenseItems title= {props.expenses[3].title} amount= {props.expenses[3].amount} date={props.expenses[3].date}/> */}
</Card>
</div>


)
}