import styles from "../styles/sections/hook.module.scss"

export default function Hook() {
    return (
        <div className={styles.container}>

            <div className={styles.hook}> {/* Hook */}

                <div className={styles.identity}>
                    <h3>My name is,</h3>
                    <h1>Elijah Allotey</h1>{/* TODO: Display 1 */}
                </div>
                <h1>Elevating Experiences through development.</h1> {/*Display 1 */}

                <div className={styles.iconWrapper}>
                    <div className={styles.socials}>
                    <a><img src = "../assets/github.svg" alt="Github"/></a>
               <a><img src = "../assets/instagram.svg" alt="Instagram"/></a>
               <a><img src = "../assets/mail.svg" alt="Mail"/></a>
               <a><img src = "../assets/calendar.svg" alt="Calendar"/></a>

                      
                    </div>
                    <div className={styles.resume}>
                    <a><img src="../assets/document.svg" alt="Document"/></a>
              
                        <h5>View my resume</h5> {/* TODO: Make bigger */}
                    </div>
                </div>

            </div>

            <div className={styles.imageContainer}> {/* Bust svg */}
            <img src="../assets/bust.png" />
                </div>

        </div>
    )
}