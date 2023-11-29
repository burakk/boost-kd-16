import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Logo</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <p>Ana sayfa</p> }/>

          <Route path="/hakkımda" element={ <p>Hakkımda</p> }/>
         
        </Routes>
        main
      </main>

      <footer>
        footer
      </footer>
    </>
  )
}

export default App
