import { useContext, useState } from "react";
import { login } from "../API/API";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {addToken} = useContext(AuthContext)
    const navigate = useNavigate();

    function onEmailChange(e){
        setEmail(e.target.value);
    }

    function onPasswordChange(e){
        setPassword(e.target.value);
    }

    function handleLogin(event){
        event.preventDefault();
        login({email, password})
        .then((userData) => {
            addToken(userData);
            navigate("/admin");
            // console.log(userData);
        })
        .catch((err) => {
            alert(err);
        })
    }

    return (
        <>
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" id="email" placeholder="Write your email" value={email} onChange={onEmailChange}/>
                <input type="password" name="password" id="password" placeholder="Write your password" value={password} onChange={onPasswordChange}/>

                <button>
                    Login
                </button>
            </form>
        </>
    );
}
