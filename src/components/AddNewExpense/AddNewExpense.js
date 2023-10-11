import React from "react";
import '../AddNewExpense/AddNewExpense.css'

function AddNewExpense() {
    return (
        <>
            <div className="input-field">
                {/* <h1>Add New Expense</h1> */}
                <form action="">
                    <div className="form-content">
                        <div className="name">
                            <label htmlFor="name">Enter the Expense : </label>
                            <input type="text" id="" placeholder="Enter Your Expense" />
                        </div>
                        <div className="expense-amount">
                            <label htmlFor="amount">Enter the Amount : </label>
                            <input type="number" placeholder="Enter the Amount" />
                        </div>
                        <div className="expense-date">
                            <label htmlFor="date" id="expensedate">
                                Enter the Date :{" "}
                            </label>
                            <input type="date" placeholder="Enter the Date" />
                        </div>
                        <div className="add-expense-button">
                            <button className="expense-button">Add Expense</button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddNewExpense;