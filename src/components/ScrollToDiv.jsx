import React, { useRef } from 'react'

const ScrollToDiv = () => {
    const ref= useRef();

  return (
    <div>
        <div style={{padding:"100px", backgroundColor:"#FEFCF3"}}>
        <div className='ques-odd'>Using Div refernce to scroll to target Div</div>
            <h1>Click to scroll to next div</h1>
            <button onClick={()=>ref.current.scrollIntoView({behavior:"smooth"})}>click me!</button>
        </div>
        <div ref={ref} className='container-odd'>
            <h1>Hi! from Target Div</h1>
            <p>I am Target Div</p>
            <p>Thanks for scrolling !!!!!</p>
        </div>
    </div>
  )
}

export default ScrollToDiv
