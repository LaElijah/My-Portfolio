import ContactForm from "./contactForm"
import styles from "../styles/sections/contact.module.scss"

export default function Contact() {

    return(
        <div className={styles.container}>
            <div className={styles.contact}>
                <h3>Thanks for visiting</h3>
                <h1>Want to get in contact?</h1> {/*Display 1 */}
            </div>
            <ContactForm/>
        </div>
    )
}