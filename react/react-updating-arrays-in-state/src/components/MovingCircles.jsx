import { useState } from "react";

const DATA_SHAPES = [
    { shape: "circle", x: 10, y: 0 },
    { shape: "circle", x: 70, y: 0 },
    { shape: "square", x: 150, y: 0 },
    { shape: "circle", x: 220, y: 0 },
]

export function MovingCircles() {
    const [shapeList, setShapeList] = useState(DATA_SHAPES);
    return (
        <div style={{ border: "2px solid red", padding: 56, position: "relative" }}>
            {
                shapeList.map((s, index) => {
                    return (
                        <div key={index} style={{
                            width: 20, height: 20, background: "pink", position: "absolute",
                            top: s.y,
                            left: s.x,
                            borderRadius: s.shape == "circle" ? "50%" : "0"
                        }}>

                        </div>)
                })
            }

            <button>Sadece daireleri aşağıya doğru 20px ilerlet</button>
        </div>
    )
}