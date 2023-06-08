import React, { useState} from 'react'
import CountContext from "../context/context";
import Counter  from './Counter';

const ParentOfCounter = () => {
    const [count, setCount]=useState(0);

  return (
    <div>
        <CountContext.Provider value ={{count, setCount}}>
        <h1>ParentOfCounter</h1>
        <h4>Count : {count}</h4>
        <Counter />
        </CountContext.Provider>  
    </div>
  )
}

export default ParentOfCounter