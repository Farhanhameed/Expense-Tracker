import React, { useContext} from 'react'
import { Transaction} from './Transaction'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  // console.log(context);
  return(
    <div>
    <h2>TRANSACTION HISTORY</h2>
    <ul className="transaction-list">
      {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
    
    </ul>
    </div>
  )
}

export default TransactionList;