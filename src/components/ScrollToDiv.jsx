import React, { useRef } from 'react'

const ScrollToDiv = () => {
    const ref= useRef();

  return (
    <div>
        <div className='container-even'>
        <div className='ques-even'>Using Div refernce to scroll to target Div</div>
            <h1>Click to scroll to next div</h1>
            <button className="btn-dark" onClick={()=>ref.current.scrollIntoView({behavior:"smooth"})}>click me!</button>
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
