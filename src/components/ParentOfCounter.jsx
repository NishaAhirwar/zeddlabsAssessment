import React, { useState} from 'react'
import CountContext from "../context/context";
import Counter  from './Counter';

const ParentOfCounter = () => {
    const [count, setCount]=useState(0);

  return (
    <div>
        <CountContext.Provider value ={{count, setCount}}>
        <h1>Parent Of Counter Component</h1>
        <h3>Count : {count}</h3>
        <Counter />
        </CountContext.Provider>  
    </div>
  )
}

export default ParentOfCounter