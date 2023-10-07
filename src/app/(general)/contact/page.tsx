import ContactMe from "@/app/_components/contactMe";
import styles from "@/app/_styles/pages/contact.module.scss"


export default function ContactPage() {



    return (
        <div className={styles.container}>

            <div id="contained">
                <h1>Contact</h1>

            </div>

            <ContactMe />

        </div>
    )
}