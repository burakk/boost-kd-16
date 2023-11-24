import { useState } from "react";

const MovingDot = () => {
    const [ position, setPosition ] = useState( { x:0, y:0 } )
    

    const handleMouseMove = (e)=>{
        console.log(e);
        let posX = e.clientX;
        let posY = e.clientY;
        //e.clientX 50
        //e.clientY 50 
        //{x:50, y:50}
        /*
        position.x = e.clientX;
        position.y = e.clientY;
        setPosition( position ); // { x:e.clientX, y:clientY} !!!
        */

        setPosition( { x:posX, y:posY }  ) // !!!;

    }


    return (
        <div style={
            {
                backgroundColor: "red",
                width: "300px",
                height: "300px",
                position:"relative",
            }

        }
            onMouseMove={ handleMouseMove }
        >
           <div style={{
            width:"20px",
            height:"20px",
            borderRadius:"50%",
            backgroundColor:"blue",
            position:"absolute",
            top:position.y - 250,
            left:position.x - 40,
           }}>

           </div>
        </div>
    )
}




export { MovingDot };