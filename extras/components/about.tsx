import styles from "../styles/sections/hook.module.scss"


export default function About() {


    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}></div>
            <img className={styles.image} src="../assets/sitting.png" />

            <div className={styles.hook}>
                <h2>About Me</h2>
                <h4>Description</h4>
            </div>
            
        </div>


    )
}