import { Button } from "./Button"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export function FrmAddNewToDo({ onAddNewToDo }) {
    const [newToDoContent, setNewToDoContent] = useState("");

    function handleNewContentChange(event) {
        setNewToDoContent(event.target.value);

    }

    function handleSubmit(event) {
        event.preventDefault();
        /* addNewTodo */
        const newTodoObj = { id: uuidv4(), content: newToDoContent, isCompleted: false };
        onAddNewToDo(newTodoObj);
    }

    return (
        <form id="frmAddNewToDo" style={{ border: "2px solid red" }} onSubmit={handleSubmit}>
            <input type="text" name="newToDoContent" id="newToDoContent" value={newToDoContent}
                placeholder="Bir iş yazınız..." onChange={handleNewContentChange} />
            <Button> Ekle </Button>
        </form>
    )
}