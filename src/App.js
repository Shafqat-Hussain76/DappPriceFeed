import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getval } from "./redux/appslice";
import { LoadBlockchain } from "./redux/appslice"

function App() {

  const dispatch = useDispatch();
  const list = useSelector((e)=>e.valreducer);
  const { contractProvider, Eth } = list;
  console.log(list);
  const [val, setVal] = useState(0);

  const myval = async ()=>{
    const val = await contractProvider.getPrice();
    const vals = val.toNumber();
    setVal(vals/100000000);

  }

  return (
    <div className="App">
      <h1>Coversion From Eth To $ </h1>
      {val} <br />
      <button onClick={()=>dispatch(LoadBlockchain())}>Click for load contract</button> <br />
      <button onClick={()=>myval()}>Click for updated Value</button>
    </div>
  );
}

export default App;
