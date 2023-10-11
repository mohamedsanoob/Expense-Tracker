import React from "react";
import '../TotalAmount/TotalAmount.css'


function TotalAmount({ totalAmountShow }) {
    return (
        <div>
            <div className="card">
                <div className="items">
                    <div className="totalamount">
                        <div className="title">
                            <h1>Total Expense</h1>
                        </div>
                        <div className="value">
                            <p>{totalAmountShow}</p>
                        </div>
                    </div>

                    <div className="expenseday">
                        <div className="title">
                            <h1>Most Expense Day</h1>
                        </div>
                        <div className="value">
                            12/12/2023
                        </div>
                    </div>
                    <div className="addnew">
                        <button>Add Expense</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalAmount;