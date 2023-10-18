import styles from "@/app/_styles/components/contact.module.scss";
import { IconMail } from "@tabler/icons-react";  
import MessageInput from "./elements/messageInput"; 


export default function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h2 >Get in contact_</h2>

      <main>

        <div>
          <h3>This is placeholder text, thank you for visiting the site.
              If youd like to get in contact my email is below or you
              can send a direct message to the right. 
          </h3>

          <section>                                              
            <div><IconMail/>: Elijah.Allotey.W@gmail.com</div>
          </section>


        </div>



        <div>
          <header>
            <h2>Send a message_</h2>

          </header>



          <main>
            <MessageInput />
          </main>



          <footer>
            Heres a footer for the card

          </footer>
        </div>

      </main>


    </section>
  );
}
