import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'
import './App.css'
import { Transaction } from './Transaction';

function Balance() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);

    return (
    <div className="expense-container">
        <h1>YOUR BALANCE <br />${total}</h1>
    </div>
);
}

export default Balance;
