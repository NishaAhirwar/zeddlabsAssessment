import { useState } from 'react';
import ClassChild from "./components/ClassChild";
import ClassFunctional from "./components/ClassFunctional";
import ReactHooks from "./components/ReactHooks";
import User from "./components/User"
import ScrollToDiv from "./components/ScrollToDiv";
import ParentOfCounter from './components/ParentOfCounter';
import './index.css';

function App() {
  const [uname, setName]= useState("")
  const [isClass, setComp]=useState(3);
  return (
    <div className="App ">
    <div className='container-odd'>
    <div className='ques-odd'>Class Component and Function Component Example</div>
    <input type="text" value={uname} placeholder='Enter username' onChange={(event)=>setName(event.target.value)} />
    <div className='grid-container'>
    
    <div className='item1'>
    <span>Click to get value passed to Class Component</span>
    </div>
    <div>
    <button onClick={()=>setComp(0)}>Click!</button>
    </div>
    <div className='item1'>
    <span>Click to get value passed to Function Component</span>
    </div>
    <div>
    <button onClick={()=>setComp(1)}>Click!</button>
    </div>
    
    </div>
    {isClass===3 ? null :
      isClass===0 ? <ClassChild name= {uname} /> : <ClassFunctional name={uname} /> }
      </div>

      <div className='container-even'>
        <div className='ques-odd'>Used useState hook to access and set state and also used useEffect hook for fetching userlist from API</div>
        <div style={{padding: "10px 300px"}}>
          <User />
          </div>

      </div>

      <div className='container-odd'>
        <div className='ques-odd'>Example of using React hooks(useState, useEffect, useContext and useCallback).</div>
        <ReactHooks />

      </div>

      <div >
        <ScrollToDiv />
      </div>

      <div className='container-even'>
      <ParentOfCounter />

      </div>
      
      </div>
      );
    }
    
    export default App;
    