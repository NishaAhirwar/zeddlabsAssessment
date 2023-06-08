import React, { useContext } from 'react'
import CountContext from "../context/context";

 const Counter = () => {
    let {count, setCount} = useContext(CountContext);
  return (
    <div>
        <h1>Counter Component</h1>
        <button onClick={()=>setCount(count++)}>increment</button>
        <button onClick={()=>setCount(count--)}>decrement</button>
    </div>
  )
}

export default Counter;