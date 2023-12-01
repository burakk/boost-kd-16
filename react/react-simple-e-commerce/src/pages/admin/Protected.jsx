import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "./Layout";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Protected(){
    const {token} = useContext(AuthContext); // {token, addToken, clearToken}
    console.log(token, "****")
    if(token){
        return (
            <Layout>
                <Outlet />
            </Layout>
        )
    }

    return <Navigate to="/login" />
}