
import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("");
  console.log("App renders...")

  return (
    <>
      <h1>Hello</h1>
      <input onChange={(e) => { setFirstName(e.target.value) }} value={firstName} placeholder="firstName" />
      <Button />
      <Button2/>
    </>
  )
}

export default App



function Button() {
  const [counter, setCounter] = useState(0);
  console.log("Button renders");

  function handleClick(e) {
    // 0 
    setCounter(counter + 10000);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);


  }

  return <button onClick={handleClick}>{counter}</button>;
}


function Button2() {
  const [counter, setCounter] = useState(0);
  console.log("Button renders");

  function handleClick(e) {
    // 0 
    setCounter(counter + 1); 
    //0
    alert( counter );


  }

  return <button onClick={handleClick}>{counter}</button>;
}