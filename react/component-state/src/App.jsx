
import './App.css';
import { useState } from 'react';
import { Gallery } from './components/Gallery';

function App() {

  return (
    <div>
      <h1>hello</h1>
      <MyButton />
      <MyButton2 />
      <Box />
      <Box2 />
      <RandomComp />


     <Gallery/>
    </div>
  )

}

export default App


//state - durum - hal 

//initial render, rerender
//*** useState **** 


function MyButton() {

  let counter = 0;
  console.log("Ben buton");


  function handleClick(e) {
    console.log(counter);
    counter++;
  }

  return (
    <button type="button" onClick={handleClick}>{counter}</button>
  )
}



//useState, useRef, useEffect, useContext, useReducer ( react hooks )

function MyButton2() {
  console.log("I am the btn2");
  //array destructuring
  const [counter, setCounter] = useState(0); // [value, setterFunction ]

  //setter functions triggers rerenders

  function handleClick(e) {
    setCounter(counter + 1); //requests a new render ( yani )
  }

  return (
    <button onClick={handleClick} >
      {counter}
    </button>
  )
}


function Box() {
  console.log("mouse moves from Box...")
  const [val, setVal] = useState(0);

  function handleMouseMove(e) {

    setVal(e.clientX);
  }

  return (
    <div className="box" onMouseMove={handleMouseMove}>
      <h3>x:{val}</h3>
    </div>
  )
}


function Box2() {
  console.log("mouse moves from Box...")
  const [valX, setValX] = useState(0);
  const [valY, setValY] = useState(0);

  function handleMouseMove(e) {

    setValX(e.clientX);
    setValY(e.clientY);
  }

  return (
    <div className="box" onMouseMove={handleMouseMove}>
      <h3>x:{valX} y:{valY}</h3>
    </div>
  )
}


function RandomComp() {
  const [val, setVal] = useState(0);
  return (
    <div className="box" onClick={(e) => { setVal(Math.random()) }}>
      {val}
    </div>
  )
}