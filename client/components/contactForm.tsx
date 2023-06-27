import styles from "../styles/elements/contactForm.module.scss"

export default function ContactForm() {

    return (
        <div className={styles.container}>

            
                <h3>Leave a message</h3>
         

            <form className={styles.form}>
                <input type="field" placeholder="First Name" />
                <input type="field" placeholder="Last Name" />
                <input type="field" placeholder="Email" />
                <input type="textarea" placeholder="Write a message" />
            </form>

           
                <button className={styles.fullWidth}>Send code</button>
           

        </div>
    )
}