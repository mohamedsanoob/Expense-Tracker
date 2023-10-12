import React from "react";
import '../ExpenseItem/ExpenseItem.css'
import '../ExpenseList'
import Moment from 'react-moment';
import 'moment-timezone';

function ExpenseItem(props) {

    const { amount, expenseName, date, currency, description } = props.data;
    const newDate = <Moment format="YYYY/MM/DD">{date}</Moment>

    function handleDelete() {
        props.onDeleteExpense(props.data.id)
    }

    return (
        <div>
            <div className="expense-card ">
                <div className="expense-name">
                    <h2>{expenseName}</h2>
                </div>
                <div className="first">
                    <div className="expense-details">
                        <div className="expense-date">
                            <h3>Date</h3>
                            <p>{newDate}</p>
                        </div>
                        <div className="expense-amount">
                            <h3>Amount</h3>
                            <p>{amount}</p>
                        </div>
                        <div className="currency">
                            <h3>Cuurency</h3>
                            <p>{currency}</p>
                        </div>
                    </div>
                    <div className="second">
                        <div className="description">
                            <hr />
                            <p>{description}</p>
                        </div>

                    </div>
                    <div className="third">
                        <div className="delete-button">
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;