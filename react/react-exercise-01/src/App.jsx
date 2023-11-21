import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Card list</h2>

      <CardList>
        <Card title="Ürün 1" bgColor="beige" />
        <Card title="Ürün 2" bgColor="aqua" />
        <Card title="Ürün 3" bgColor="beige" />
        <Card title="Ürün 4" bgColor="aqua" />
      </CardList>
    </div>
  )
}

export default App



const CardList = (props) => {
  return (
    <ul className="CardList">
      {props.children}
    </ul>
  )
}


const Card = (props) => {

  return (
    <li className="Card" style={{ backgroundColor: props.bgColor }}>
      <h3>{props.title}</h3>

      <ButtonCta label="Satın al" />
    </li>
  )
}

const ButtonCta = (props) => <button type="button">{props.label}</button>;




