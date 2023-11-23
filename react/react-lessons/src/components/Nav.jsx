import styles from "../assets/styles/Nav.module.css";

export function Nav({ onChangePath }) {
    return (
        <nav className={styles.MainNav}>
            <ul>

                <li>
                    <NavLink to="/01" title="jsx yazmak" onChangePath={onChangePath}>01</NavLink>
                </li>
                <li>
                    <NavLink to="/02" title="jsx içerisinde js expression kullanmak" onChangePath={onChangePath}>02</NavLink>
                </li>

            </ul>
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