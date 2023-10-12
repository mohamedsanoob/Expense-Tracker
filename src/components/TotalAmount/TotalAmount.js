import React from "react";
import '../TotalAmount/TotalAmount.css'

function TotalAmount({ totalAmountShow, date, max_amount }) {

    return (
        <div>
            <div className="card">
                <div className="items">
                    <div className="totalamount">
                        <div className="title1">
                            <h2>Total Expense</h2>

                            <div className="expense">
                                <p>{totalAmountShow}</p>
                            </div>
                        </div>
                    </div>
                    <div className="expenseday">
                        <div className="title2">
                            <p>You spend <span> ${max_amount}</span> on <span>{date}</span> which is your most expensive day</p>
                        </div>
                    </div>
                    <div className="addnew">
                        <button><span className="button-span">+</span>New Expense</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TotalAmount;