
import './App.css'
import { useState, useEffect } from 'react';
import { SectionVideo } from './components/SectionVideo';


function App() {


  return (
    <>
      <h1>Hello the most wanted - most hated "useEffect" react hook. </h1>
      <TestingComp />

      <SectionVideo />
    </>
  )
}



function TestingComp() {
  console.log("Test komponenti render ediliyor ");
  const [counter, setCounter] = useState(0);
  const [size, setSize] = useState("lg");

  console.log("Hello, test komponenti render aşamasında 1 ");

  // 1.argüman renderlardan sonra çağrılacak callback function
  // 2. çağrılacak callback function'ın hangi durumlarda çağrılacağı    :  ( dependency array)
  // 2. argümanı hiç göndermezsen her render'dan sonra callback function çağrılılır
  //2. argüman olarak boş bir dizi verirsen sadece initial render'dan sonra çağrılır
  // 2. argüman olarak [size] gönderirsen callback sadece size değiştiğinde çağrılır
  // 2. argüman olarak [size, couner] gönderirsen callback  size ya da counter değiştiğinde çağrılır

  useEffect(() => {
    console.log("useEffect içindeki kod çalışıyor"); //render bittikten sonra çalışıyor
  }, [size, counter]);

  console.log("Hello, test komponenti render aşamasında 2 ");

  return (
    <>
      <h2>Ben test komponenti</h2>
      sayaç değeri: {counter}

      <button onClick={(e) => { setCounter(counter + 1) }}>sayaç değerini değiştir ve yeniden render tetiklensin</button>

      <button onClick={(e) => { setSize(size === "lg" ? "sm" : "lg") }}>ebat değerini değiştir ve yeniden render tetiklensin</button>
    </>
  )


}


//pure function in functional programming -  

//api calls (), server connections, sideEffects   



export default App
