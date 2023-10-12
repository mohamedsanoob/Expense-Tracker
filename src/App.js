import { useState } from 'react';
import './App.css';
import AddNewExpense from './components/AddNewExpense/AddNewExpense';
import ExpenseList from './components/ExpenseList/ExpenseList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/header';
import TotalAmount from './components/TotalAmount/TotalAmount';
import sampleData from './sample_data/sample-data.json';
import LocationInfo from './components/LocationInfo/LocationInfo';

function App() {

  const [expense, setExpense] = useState(sampleData);
  let totalamount = 0;
  sampleData.forEach(value => {
    totalamount += parseFloat(value.amount);
  });



  // const expense_day = Object.groupBy(sampleData, ({ date }) => date);

  // const result = {};

  // Object.entries(expense_day).forEach((data) => {
  //   let total = 0;

  //   data[1].forEach((value) => {
  //     total += parseFloat(value.amount);
  //   })

  //   result[data[0]] = {
  //     [totalamount]: total,
  //   };
  // });


  // let max_amount = 0;
  // let date = "";
  // Object.entries(result).forEach((value) => {
  //   if (max_amount < value[1].totalamount) {
  //     max_amount = value[1].totalamount;
  //     date = value[0];
  //   }
  // });




  return (
    <div className="App">
      <Header />
      <LocationInfo />
      {/* date={date} max_amount={max_amount} */}
      <TotalAmount totalAmountShow={totalamount} />
      <AddNewExpense setExpense={setExpense} />
      <ExpenseList data={expense} setExpense={setExpense} />
      <Footer />
    </div>
  );
}

export default App;
