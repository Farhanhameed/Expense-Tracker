import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'
import './App.css'
import { Transaction } from './Transaction';

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

    return (
  // <div>      
    
    <div className="expense-container">
      <div><h3>INCOME</h3><p className="money plus">{income}</p></div>
        <div><h3>EXPENSE</h3><p className="money minus">{expense}</p></div>
  </div>  
);
}

export default IncomeExpenses;
