import React from "react";
import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem/ExpenseItem";


function ExpenseList(props) {
console.log(props)
    function handleDeleteExpense(index) {

        const updatedExpenses = [...props.data];
        updatedExpenses.splice(index, 1);
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