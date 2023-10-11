import React from "react";
import '../ExpenseList/ExpenseList.css'
import ExpenseItem from "../ExpenseItem/ExpenseItem";


function ExpenseList(props) {
    console.log(props);
    if (props)
        return (
            <div className="section">
                <div className="container">
                    <div className="cards">
                        {props.data.map((value) => {
                            return (
                                <ExpenseItem data={value} />
                            );
                        })}

                    </div>
                </div>
            </div>
        );
}

export default ExpenseList;