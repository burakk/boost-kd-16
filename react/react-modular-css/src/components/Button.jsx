import styles from "../assets/styles/Button.module.css";

export function Button({type="button", children}){
    return (
        <button className={styles["Button"]} type={type}>{children}</button>
    )
}