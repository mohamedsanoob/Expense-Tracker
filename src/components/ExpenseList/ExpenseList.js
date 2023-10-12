import React from "react";
import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem/ExpenseItem";


function ExpenseList(props) {
console.log(props)
    function handleDeleteExpense(index) {
        // Create a copy of the current expenses array
        const updatedExpenses = [...props.data];
    
        // Use splice to remove the entire card (expense) at the specified index
        updatedExpenses.splice(index, 1);
    
        // Update the state to reflect the updated list of expenses
        props.setExpense(updatedExpenses);
      }
    
    if (props)
        return (
            <div className="section">
                <div className="container">
                    <div className="cards">
                        {props.data.map((value,index) => {
                            return (
                                <ExpenseItem setExpense={props.setExpense} data={value} key={index}  onDeleteExpense={() => handleDeleteExpense(index)}  />
                            );
                        })}

                    </div>
                </div>
            </div>
        );
}

export default ExpenseList;