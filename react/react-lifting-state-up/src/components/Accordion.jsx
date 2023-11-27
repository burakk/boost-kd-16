import { useState } from "react";

const DATA_ACCORDION = [

    { id: 1, title: 'Title 1', content: 'Content lorem lorem lorem lorem' },
    { id: 12, title: 'Title 2', content: 'Content lorem lorem lorem lorem' },
    { id: 3, title: 'Title 3', content: 'Content lorem lorem lorem lorem' },
    { id: 4, title: 'Title 4', content: 'Content lorem lorem lorem lorem kejekje' },

];

export function Accordion() {

    const [activeId, setActiveId] = useState(12);

    function changeActiveId(id) {
        setActiveId(id);
    }

    return <ul>
        {
            DATA_ACCORDION.map((item) => {
                return <Panel key={item.id} title={item.title} content={item.content} isOpen={activeId == item.id} onActiveIdChange={changeActiveId} id={item.id} />
            })
        }
    </ul>
}


function Panel({ id, title, content, isOpen, onActiveIdChange }) {

    return (
        <li >
            <h2>{title}</h2>
            {isOpen && <p>{content}</p>}
            <button type="button" onClick={(e) => { onActiveIdChange(isOpen ? null : id) }}>İçerik {isOpen ? "Gizle" : "Göster"}</button>
        </li>
    )
}




