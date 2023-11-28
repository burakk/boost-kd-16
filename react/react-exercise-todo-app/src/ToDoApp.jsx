
import { useState } from 'react';
import './App.css'
import { DATA_TODOS } from './data/data'

function ToDoApp() {
  const [todos, setTodos] = useState(DATA_TODOS);
  return (
    <div className="ToDoApp">
      <h1>Yapılacaklar</h1>
      <FrmAddNewToDo />
      <ToDoList todos={todos} />
    </div>
  )
}


function FrmAddNewToDo() {

  return (
    <form id="frmAddNewToDo" style={{ border: "2px solid red" }}>
      <input type="text" name="newToDoContent" id="newToDoContent"
        placeholder="Bir iş yazınız..." />
      <Button> Ekle </Button>
    </form>
  )
}


function ToDoList({ todos }) {

  return (
    <ul>
      <h1>To do list</h1>
      {todos.map((todo) => <ToDoItem content={todo.content} />)}
    </ul>
  )
}

function ToDoItem({ content }) {

  return (
    <li>
      <h1>{content}</h1>
    </li>
  )
}


function Button({ children }) {
  return <button>{children}</button>;
}


export default ToDoApp


