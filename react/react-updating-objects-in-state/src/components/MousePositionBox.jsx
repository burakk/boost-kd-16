import { useState } from "react"

export function MousePositionBox() {
    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    //let posX = 0;

    function handleMove(e) {
        console.log(e);
        setPosX(e.clientX);
        setPosY(e.clientY);
    }

    return (
        <div style={{ border: "2px solid red", backgroundColor: "pink", width: "200px", height: "200px" }}
            onMouseMove={handleMove}
        >
            {posX}, {posY}
        </div>
    )
}



