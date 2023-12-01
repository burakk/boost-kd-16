import { Outlet } from "react-router-dom";
import "../../AppAdmin.css";

export function Layout() {
    return (
        <>
            <header>
                <h1 className="logo">Basitçe Alışveriş
                    <strong>e-ticaretin en basit hali </strong>

                </h1>
                <h3>Yönetim Paneli</h3>
            </header>
            <main>

                <Outlet />

            </main>

            <footer>
                <p>Her hakkı saklıdır @ 2023 KD-16</p>
            </footer>
        </>
    )
}