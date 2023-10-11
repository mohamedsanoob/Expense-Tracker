import React from "react";
import '../ExpenseList/ExpenseList.css'
import ExpenseItem from "../ExpenseItem/ExpenseItem";


function ExpenseList(props) {
    if (props)
        return (
            <div className="section">
                <div className="container">
                    <div className="cards">
                        {props.data.map((value,index) => {
                            return (
                                <ExpenseItem data={value} key={index} />
                            );
                        })}

                    </div>
                </div>
            </div>
        );
}

export default ExpenseList;