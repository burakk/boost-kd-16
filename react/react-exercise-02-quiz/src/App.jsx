import './App.css'

import { useState } from 'react';

function App() {
  const [userAnswer, setUserAnswer] = useState("");
  const [status, setStatus] = useState("typing"); //typing, success, submitting 
  const [error, setError] = useState(null);

  const handleUserAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    checkAnswer(userAnswer)
      .then(() => {
        setStatus("success");
        console.log("****")
        //alert("Cevap doğru");
      })
      .catch((error) => {
        //alert(error.message);
        setError(error);
        setStatus("typing");
        setUserAnswer("");
      });

  }

  if (status == "success") {
    return (
      <>
        <h1>Quiz Egzersiz</h1>
        <p>Cevap doğru</p>
      </>
    )
  }

  return (

    <>
      <h1>Quiz Egzersiz</h1>
      <form onSubmit={handleSubmit}>
        <p>Türkiye'nin en kalabalık şehrini yazınız.</p>
        <input type="text" name="userAnswer" id="userAnswer" value={userAnswer} onChange={handleUserAnswerChange} />
        {error && <p>{error.message} </p>}
        <p>
          <button type="submit" disabled={status == "submitting" || userAnswer.length < 3 ? true : false}>Cevapla</button>
        </p>

      </form>
    </>
  )
}



function checkAnswer(answer) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (answer.toLocaleLowerCase("tr") == "istanbul") {
        resolve();
      }
      else {
        reject(new Error("Hatalı cevap, tekrar deneyiniz."));
      }
    }, 2000);

  });
}



export default App
