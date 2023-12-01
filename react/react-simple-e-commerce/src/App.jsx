import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Products } from "./Pages/Products";
import { Layout } from "./Pages/Layout";
import { DashBoard } from "./Pages/admin/DashBoard";
import { Products as AdminProducts } from "./Pages/admin/Products";
import { Protected } from "./Pages/admin/Protected";
import { AuthContextProvider } from "./context/AuthContext";

// .NET CORS => Cross-origin resource sharing

function App() {
    return (
        <AuthContextProvider>
            <Routes>
                <Route path="/admin" element={<Protected />}>
                    <Route path="" element={<DashBoard />} />
                    <Route path="products" element={<AdminProducts />} />
                </Route>
                <Route
                    path="/"
                    element={
                        <main>
                            <Layout />
                        </main>
                    }
                >
                    <Route path="" element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="*" element={<h3>Sayfa bulunamadı. Ooops!</h3>} />
            </Routes>
        </AuthContextProvider>
    );
}

export default App;
