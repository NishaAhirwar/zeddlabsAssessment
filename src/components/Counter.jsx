import React, { useContext } from 'react'
import CountContext from "../context/context";

 const Counter = () => {
    let {count, setCount} = useContext(CountContext);
  return (
    <div className='container-odd'>
        <h1>Counter Component</h1>
        <button className='btn' onClick={()=>setCount(count++)}>increment</button>
        <button className='btn' onClick={()=>setCount(count--)}>decrement</button>
    </div>
  )
}

export default Counter;