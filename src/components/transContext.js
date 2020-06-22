import React, {createContext, useReducer, useState } from "react"
import TransactionReducer from './transReducer';

const initialTrans = [
    {amount: 1, desc: "c"},
    {amount: 2, desc: "a"},
    {amount: -1, desc: "b"}
  ]
  export const TransactionContext = createContext(initialTrans);

  

  export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTrans)
    
      function addTransaction(transObj){
          dispatch({
            type: "ADD_TRANSACTION",
            payload:{
              amount: transObj.amount
              , desc: transObj.desc
            }
          })
      }
      return(
          <TransactionContext.Provider value={{
            transactions: state,
            addTransaction // addTransaction: addTransaction
          }}>
            {children}
          </TransactionContext.Provider>
      )
  }