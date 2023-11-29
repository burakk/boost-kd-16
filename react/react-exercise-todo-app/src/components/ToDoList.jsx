import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos, onDeleteToDo }) {

    return (
        <ul>
            <h1>To do list</h1>
            {todos.map((todo) => <ToDoItem
                id={todo.id}
                onDeleteToDo={onDeleteToDo} content={todo.content} />)}
        </ul>
    )
}
