
import './App.css'
import { useState, useReducer } from 'react'
import { tasksReducer } from './reducer/tasksReducer'

function App() {


  return (
    <>
      <h1>React useReducer</h1>
      <TasksApp />
    </>
  )
}

export default App


const DATA_TASKS = [
  { id: 0, title: "Task 1" },
  { id: 2, title: "Task 1" },
  { id: 3, title: "Task 3" },
]


function TasksApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, DATA_TASKS);


  return (
    <ul>
      {tasks.map(t => <li>{t.id} - {t.title}</li>)}
      <button onClick={
        (e) => {
          const action = { type: "added", taskObj: { title: "Hello new task" } };
          dispatch(action)

        }
      }>ekle </button>

      <button onClick={
        (e) => {
          const action = { type: "deleted", id: 0 }
          dispatch(action)
        }
      }>sil</button>

      <button
        onClick={
          (e) => {
            const action = { type: "updated", id: 0, title: "React Dokümantasyonu İyice Oku" }
            dispatch(action)
          }
        }
      >güncelle</button>
    </ul>
  )

}
