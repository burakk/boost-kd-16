import { useRef } from "react";

export function Form() {

    //useRef hook'unu Dom elemanları ile kullanmak

    const inputRef = useRef(null);

    function handleClick(e) {
        inputRef.current.focus();
    }

    return (
        <div style={{ border: "4px solid pink" }} >
            <h2>Form</h2>
            <input ref={inputRef} type="text" name="test" id="test" style={{ borderColor: "white" }} />
            <button onClick={handleClick}>Input kutusunu Odakla</button>
        </div>
    )

}