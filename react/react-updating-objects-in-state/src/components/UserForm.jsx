import { useState } from "react";

const UserForm = () => {
    const [firstName, setFirstName] = useState("");  //{firstName:"", lastName:""}
    const [lastName, setLastName] = useState("");

    function handleFirstNameChange(e) {
        const value = e.target.value;
        setFirstName(value);
    }

    function handleLastNameChange(e) {
        const value = e.target.value;
        setLastName(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} style={{ border: "4px solid red", padding: "24px" }}>
            <input type="text" name="firstName" id="firstName" placeholder="firstName" value={firstName} onChange={handleFirstNameChange} />
            <input type="text" name="lastName" id="lastName" placeholder="lastName" onChange={handleLastNameChange} value={lastName} />
            <button >kaydet</button>

            <h3>Sayın, {firstName} {lastName}</h3>
        </form>
    )
}



const UserForm2 = () => {
    /*
    const [firstName, setFirstName] = useState("");  //{firstName:"", lastName:""}
    const [lastName, setLastName] = useState("");
    */
    const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "" })

    function handleFirstNameChange(e) {

        const newValue = e.target.value;

        //setUserInfo    {  firstName:newValue, lastName:"" }

        //setUserInfo( { firstName:newValue, lastName:userInfo.lastName  } )

        setUserInfo({ ...userInfo, firstName: newValue });

    }

    function handleLastNameChange(e) {
        const newValue = e.target.value;
        setUserInfo({ ...userInfo, lastName: newValue });
    }



    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} style={{ border: "4px solid red", padding: "24px" }}>
            <input type="text" name="firstName" id="firstName" placeholder="firstName" value={userInfo.firstName} onChange={handleFirstNameChange} />
            <input type="text" name="lastName" id="lastName" placeholder="lastName" onChange={handleLastNameChange} value={userInfo.lastName} />
            <button >kaydet</button>

            <h3>Sayın, {userInfo.firstName} {userInfo.lastName}</h3>
        </form>
    )
}


const UserForm3 = () => {
    /*
    const [firstName, setFirstName] = useState("");  //{firstName:"", lastName:""}
    const [lastName, setLastName] = useState("");
    */
    const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "", email: "" })

    function handleChange(e) {

        const newValue = e.target.value;
        const fieldName = e.target.name;


        setUserInfo({ ...userInfo, [fieldName]: newValue });

    }


    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} style={{ border: "4px solid red", padding: "24px" }}>
            <input type="text" name="firstName" id="firstName" placeholder="firstName" value={userInfo.firstName} onChange={handleChange} />
            <input type="text" name="lastName" id="lastName" placeholder="lastName" onChange={handleChange} value={userInfo.lastName} />

            <input type="text" name="email" id="email" placeholder="e posta yazınız..." value={userInfo.email} onChange={handleChange} />
            <button >kaydet</button>

            <h3>Sayın, {userInfo.firstName} {userInfo.lastName} {userInfo.email}</h3>
        </form>
    )
}




export { UserForm, UserForm2, UserForm3 }