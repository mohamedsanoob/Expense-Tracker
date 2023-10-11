import React from "react";
import '../ExpenseItem/ExpenseItem.css'
import '../ExpenseList/ExpenseList'

function ExpenseItem(props) {
    const { amount, expenseName, date, description } = props.data;
    console.log(props);
    return (
        <div>
            <div className="expense-card ">
                <div className="expense-name">
                    <h2>{expenseName}</h2>
                </div>
                    <div className="expense-details">
                        <div className="expense-date">
                            <h3>Date</h3>
                            <p>{date}</p>
                        </div>
                        <div className="expense-amount">
                            <h3>Amount</h3>
                            <p>{amount}</p>
                        </div>
                        <div className="delete-button">
                            <button>Delete</button>
                        </div>

                    </div>
            </div>
        </div>
    );
}

export default ExpenseItem;