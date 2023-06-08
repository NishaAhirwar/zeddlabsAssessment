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
    
    
    
    <h3>Click to get value passed to Class Component</h3>
    
    
    <button className='btn' onClick={()=>setComp(0)}>Click!</button>
    
    
    <h3>Click to get value passed to Function Component</h3>
    
    
    <button className='btn' onClick={()=>setComp(1)}>Click!</button>
    
    
    
    {isClass===3 ? null :
      isClass===0 ? <ClassChild name= {uname} /> : <ClassFunctional name={uname} /> }
      </div>

      <div className='container-even'>
        <div className='ques-even'>Used useState hook to access and set state and also used useEffect hook for fetching userlist from API</div>
        <div >
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
        <div className='ques-even'>Passing data from parent component to child component and child component to parent component</div>
      <ParentOfCounter />

      </div>
      
      </div>
      );
    }
    
    export default App;
    