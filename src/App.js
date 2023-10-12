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
