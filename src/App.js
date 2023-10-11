import './App.css';
import AddNewExpense from './components/AddNewExpense/AddNewExpense';
import ExpenseList from './components/ExpenseList/ExpenseList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/header';
import TotalAmount from './components/TotalAmount/TotalAmount';
import sampleData from './sample_data/sample-data.json';


function App() {

  let totalamount = 0;
  sampleData.forEach(value => {
    totalamount += parseFloat(value.amount.replace("$", ""));
  });



  const expense_day = Object.groupBy(sampleData, ({ date }) => date);
  console.log(expense_day)
  const result = {};

  Object.entries(expense_day).forEach((data) => {
    let total = 0;
    console.log(data[1]);
    data[1].forEach((value) => {
      total += parseFloat(value.amount.replace("$", ""));
    })

    result[data[0]] = {
      ["totalamount"]: total,
    };
  });
  console.log(result)

  let max_amount = 0;
  let date = "";
  Object.entries(result).forEach((value) => {
    if (max_amount < value[1].totalamount) {
      max_amount = value[1].totalamount;
      date = value[0];
    }
  });

  console.log(date);
  console.log(max_amount);


  return (
    <div className="App">
      <Header />
      <TotalAmount totalAmountShow={totalamount} date={date} max_amount={max_amount} />
      <AddNewExpense />
      <ExpenseList data={sampleData} />
      <Footer />
    </div>
  );
}

export default App;
