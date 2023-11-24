import styles from "../assets/styles/Nav.module.css";
import { useState } from "react";

export function Nav({ onChangePath }) {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    console.log("Nav is rendering...");
    function handleToggleNav(e) {
        setIsMenuExpanded(!isMenuExpanded);
        //console.log(isMenuExpanded);
    }


    return (
        <nav className={styles.MainNav} >
            <button onClick={handleToggleNav}>Menü {isMenuExpanded ? "Kapat" : "Aç"}</button>
            {
                isMenuExpanded

                &&
                <ul onClick={(e) => { setIsMenuExpanded(false) }}>

                    <li>
                        <NavLink to="/01" title="jsx yazmak" onChangePath={onChangePath}>01</NavLink>
                    </li>
                    <li>
                        <NavLink to="/02" title="jsx içerisinde js expression kullanmak" onChangePath={onChangePath}>02</NavLink>
                    </li>
                    <li>
                        <NavLink to="/03" title="Bir komponente özellikler paslamak," onChangePath={onChangePath}>03</NavLink>
                    </li>
                    <li>
                        <NavLink to="/04" title="Koşullu render etmek" onChangePath={onChangePath}>04</NavLink>
                    </li>
                    <li>
                        <NavLink to="/05" title="Liste - Array render etmek" onChangePath={onChangePath}>05</NavLink>
                    </li>
                    <li>
                        <NavLink to="/06" title="Komponentlerin saflığını muhafaza etmek" onChangePath={onChangePath}>06</NavLink>
                    </li>
                    <li>
                        <NavLink to="/07" title="Olaylara yanıt vermek - Responding to events" onChangePath={onChangePath}>07</NavLink>
                    </li>

                </ul>
            }
        </nav>
    )
}


function NavLink({ to, title, onChangePath, children }) {

    function handleClick(e) {
        e.preventDefault();
        onChangePath(to);
    }
    return <a href={to} title={title}
        onClick={handleClick}>{children}</a>
}