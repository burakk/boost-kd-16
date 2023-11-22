import styles from "../assets/styles/Card.module.css"

export function Card({ title, description }) {
    return (
        <li className={styles.Card}>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}