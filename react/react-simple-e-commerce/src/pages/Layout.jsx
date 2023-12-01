import { Outlet } from "react-router-dom";
import "../App.css"

export function Layout() {
    return (
        <>
            <header>
                <h1 className="logo">Basitçe Alışveriş
                <strong>e-ticaretin en basit hali</strong>
                </h1>
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
