import styles from "../styles/layout/footer.module.scss"

export default function Footer() {

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <a><h4>Home</h4></a>
                <a><h4>Projects</h4></a>
                <a><h4>Blog</h4></a>
            </div>

            <div className={styles.socials}>
                <a><img src="../assets/github.svg" alt="Github"/></a>
               <a><img src="../assets/instagram.svg" alt="Instagram"/></a>
               <a><img src="../assets/mail.svg" alt="Mail"/></a>
               <a><img src="../assets/calendar.svg" alt="Calendar"/></a>
            </div>

        </div>
    )
}