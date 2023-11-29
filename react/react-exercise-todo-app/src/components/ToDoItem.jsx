
import { useState } from "react"
import { Button } from "./Button"

export function ToDoItem({ content, onDeleteToDo, id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState("");//*** */

  const viewTemplate = (
    <li>
      <p>{content}</p>
      <Button onClick={() => { setIsEditing(true) }}>düzenle</Button>
      <Button onClick={() => { onDeleteToDo(id) }}>sil</Button>
    </li>
  )

  const editTemplate = (
    <li>
      <form onSubmit={handleSubmit}>
        <input type="text" value={updatedContent || content} onChange={(e) => {
          setUpdatedContent(e.target.value);
        }} />
        <Button>Kaydet</Button>
        <Button onClick={() => { setIsEditing(false) }} >Kapat</Button>
      </form>
    </li>
  )

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>{isEditing ? editTemplate : viewTemplate}</>
  )
}