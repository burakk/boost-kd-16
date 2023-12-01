import { Outlet, Navigate } from "react-router";
import { Layout } from "./Layout";

export function Protected() {

    const token = false; //check jwt json web token

    if (token) {
        return (
            <Layout>
                <Outlet />
            </Layout>
        )
    }

    return <Navigate to="/giriş" />

}