
import { useState } from 'react';
import './App.css'
import { DATA_TODOS } from './data/data'
import { FrmAddNewToDo } from './components/FrmAddNewToDo';
import { ToDoList } from './components/ToDoList';

//todo {id:1, content:"todo1", isCompleted:false}


function ToDoApp() {
  const [todos, setTodos] = useState(DATA_TODOS);


  function addNewToDo(newTodoObj) {
    const newToDosList = [newTodoObj, ...todos]
    setTodos(newToDosList);

  }

  function deleteToDo(id) {
    alert(id);
  }

  function updateToDo() {

  }

  return (
    <div className="ToDoApp">
      <h1>Yapılacaklar</h1>
      <FrmAddNewToDo onAddNewToDo={addNewToDo} />
      <ToDoList todos={todos} onDeleteToDo={deleteToDo} />
    </div>
  )
}



export default ToDoApp


