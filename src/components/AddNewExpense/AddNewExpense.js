import React, { useState } from "react";
import '../AddNewExpense/AddNewExpense.css'
import uuid from 'react-uuid';


function AddNewExpense({ setOpenForm, setExpense }) {

    const [expensedata, setExpenseData] = useState({
        expenseName: "",
        date: "",
        amount: 0,
        currency: "",
        description: "",
    });

    const handleChange = (e) => {
        setExpenseData((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
    };
    console.log(expensedata);

    const handleSubmit = (e) => {
        e.preventDefault()
        setExpense((prevState) => {
            return [...prevState, { ...expensedata, id: uuid() }];
        });

 
    }



    console.log(expensedata)


    return (
        <div className="input-field">
            {/* <h1>Add New Expense</h1> */}
            <form action="">
                <div className="form-content">
                    <div className="name">
                        <label >Enter the Expense : </label>
                        <input type="text" id=""
                            placeholder="Enter Your Expense"
                            name="expenseName"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="expense-amount">
                        <label >Enter the Amount : </label>
                        <input type="number" placeholder="Enter the Amount" name="amount" onChange={handleChange} />
                    </div>
                    <div className="expense-date">
                        <label id="expensedate">
                            Enter the Date :
                        </label>
                        <input type="date" placeholder="Enter the Date" name="date" onChange={handleChange} />
                    </div>
                    <div className="expense-currency">
                        <label >Enter the Currency : </label>
                        <input type="text" placeholder="Enter the Currency" name="currency" onChange={handleChange} />
                    </div>
                    <div className="expense-description">
                        <label >Enter the Description : </label>
                        <input type="text" placeholder="Enter the Description" name="description" onChange={handleChange} />
                    </div>
                    <div className="add-expense-button">
                        <button className="expense-button" onClick={handleSubmit}>Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddNewExpense;