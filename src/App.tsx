import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators, State } from "./state/index";

function App() {

  const dispatch = useDispatch();
  const { depostMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank)
  const [depositText, setdepositText] = useState(0);
  const [withdrawText, setwithdrawText] = useState(0);

  return (
    <div className="App">
      <h2>Current Balance : {amount}</h2>
      <div className="box">
        <input type='text' value={depositText} onChange={(e) => setdepositText(Number(e.target.value))} />
        <button className = "buttons" onClick={() => {
          depostMoney(depositText);
          setdepositText(0);
        }
        }>Diposit</button>
      </div>
      <div className="box">
        <input type='text' value={withdrawText} onChange={(e) => setwithdrawText(Number(e.target.value))} />
        <button className = "buttons" onClick={() => {
          withdrawMoney(withdrawText);
          setwithdrawText(0);
        }
        }>Withdraw</button>
      </div>
      <div className="box">
        <button className = "buttonsLast" onClick={() => {
          bankrupt();
          setwithdrawText(0);
          setwithdrawText(0);
        }
        }>Bankrupt</button>
      </div>

    </div>
  );
}

export default App;
