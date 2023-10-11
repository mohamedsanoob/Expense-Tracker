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

  return (
    <div className="App">
      <Header />
      {/* <TotalAmount totalAmountShow={totalamount} /> */}
      <AddNewExpense />
      <ExpenseList data={sampleData} />
      <Footer />
    </div>
  );
}

export default App;
