import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'

function AddNewTras() {
  const [text, setText] =useState('');
  const [amount, setAmount] =useState();
  
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction ={
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

        return (
      <div>            
              <h3>ADD NEW TRANSACTIONS</h3>
              <hr />
              <form className="transaction-form" onSubmit={onSubmit}>
                <label>Enter Description
                  <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add Description..." required/>
                </label>
                <br />
              <label>Enter Amount
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Add Amount..." required/>
              </label>
                  <br />
                  {/* <input type="submit" value="Add Transaction" id='submitButton'/> */}
                  
                  <button>Add Transaction</button>
              </form>
      </div>
  
  );
  }
  
  export default AddNewTras;