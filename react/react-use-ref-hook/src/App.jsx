
import { useState, useRef } from 'react';
import { StopWatch } from './components/StopWatch';
import './App.css'
import { Form } from './components/Form';

function App() {


  return (
    <>
      <Button />

      <div style={{ border: "2px solid red", padding: "24px" }}>
        <Button2 />
      </div>


      <StopWatch />

      <Form />
    </>
  )
}


function Button() {

  console.log("Button render ediliyor");
  const [counter, setCounter] = useState(0);  //komponentin hafızasında değişecek ve görüntüye yansıyacak bir değer saklamak istiyorum;

  function handleClick(e) {
    setCounter(counter + 1);
  }


  return (
    <button onClick={handleClick}> {counter}  </button>
  )

}


function Button2() {
  const counter = useRef(0);  //komponentin hafızasında değişecek ve görüntüye yansıması gerekmeyen bir değer saklamak istiyorum; { current:0 }
  const [random, setRandom] = useState(Math.random()); //komponentin hafızasında değişecek ve görüntüye yansıyacak bir değer saklamak istiyorum;
  let ordinaryCounter = 0;


  return (
    <>
      <button onClick={(e) => { ordinaryCounter++ }}> ordinary counter değeri: {ordinaryCounter}</button>
      <button onClick={(e) => { counter.current++ }}>Ref ile saklanan counter değeri: {counter.current}</button>
      <button onClick={(e) => { setRandom(Math.random()) }}>useState ile saklanan değer {random}</button>
    </>

  )
}

//Date.now() since 01 Ocak 1970 in miliseconds
//stopWatch component
//setInterval()




export default App



//rendering - rerendering   