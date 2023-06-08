import React, { useState, useCallback, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/context';

const ThemeComponent=()=>{
    const theme= useContext(ThemeContext);
    const [message, setMessage]= useState("Hi! How are you? ");

    useEffect(()=>{
        setTimeout(()=>{
            setMessage("Nice to meet you. Bye!!")
        },5000)
    },[])
    return(
        <>
        <div style={{backgroundColor:theme}} className='theme-div'>
        <h1>{message}</h1></div>
        </>
    )
}

const ReactHooks = () => {
    const [theme, setTheme]= useState("#FFF6BD");
    

    const toggleTheme=useCallback(()=>{
        setTheme((prevTheme)=>(prevTheme==="#FFF6BD" ? "#FF9F9F" : "#FFF6BD"))
    },[]);

    useEffect(()=>{
        
    },[]);

  return (
    <div>
        <ThemeContext.Provider value={theme}>
        <ThemeComponent />
        <button onClick={toggleTheme}>Toggle Theme</button>
        </ThemeContext.Provider>
        
    </div>

  )
}

export default ReactHooks