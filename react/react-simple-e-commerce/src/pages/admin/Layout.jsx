import { Outlet } from "react-router-dom";
import "../../AppAdmin.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Layout() {
    const {token, clearToken} = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout(e){
        clearToken();
        navigate("/admin");
        
    }


    return (
        <>
            <header>
                <h1 className="logo">Basitçe Alışveriş
                <strong>e-ticaretin en basit hali</strong>
                </h1>
                <h3>Yönetim Paneli</h3>
                <button onClick={handleLogout}>{JSON.parse(token).name} Logout</button>
            </header>
            <main>
                <section>
                    <Outlet />
                </section>
            </main>
            <footer>Her Hakkı Saklıdır @ 2023 KD-16</footer>
        </>
    );
}
