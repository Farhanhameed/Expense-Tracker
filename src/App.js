import React from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpeses from './components/IncomeExpense'
import TransactionList from './components/TransactionList'
import AddNewTras from './components/AddNewTras'
import {GlobalProvider} from './context/GlobalState'

function App() {
    return (
    <GlobalProvider>
      <div  className="container">
      <Header />
      <Balance />
      <IncomeExpeses />
      <TransactionList />
      <AddNewTras />
      </div>
    </GlobalProvider>
  );
}

export default App;
