import { useState } from "react";

export function Form() {
    const [firstName, setFirstName] = useState("");

    console.log("Form is rendering...");
    function searcInUsers() {

    }

    function handleChange(e) {

        const value = e.target.value;
        console.log("Şu anda yazıyorsunuz...", value);
        setFirstName(value);
    }


    return (
        <>
            <h2>Form Komponenti</h2>
            <form onSubmit={(e) => { e.preventDefault() }}>
                <input type="text" name="firstName" id="firstName" placeholder="Adınız" onChange={handleChange} value={firstName} />
                <button onClick={(e) => { setFirstName("") }}>Sıfırla</button>
            </form>
        </>
    )
}