import styles from '../styles/elements/avatar.module.scss'

export default function Avatar() {
    return (
        <div className={styles.container}>
            <img className={styles.image} src="../assets/Avatar.png" />
        </div>
    )
}