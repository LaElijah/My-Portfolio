import styles from "@/app/_styles/components/contact.module.scss";
import { IconMail, IconPhone } from "@tabler/icons-react";
import MessageInput from "./elements/messageInput";


export default function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h2 >Get in contact_</h2>

      <main>

        <div>
          <h3>
         Thank you for visiting my portfolio! If you&apos;re interested and my work and you would like to
         collaborate on a project, talk about a potential solution, or you&apos;re a potential client, send
         a message through the contact form or my contact methods. 
          </h3>

          <section>
            <div className={styles.socials} ><IconMail />: Elijah.Allotey.W@gmail.com</div>
            { /*TODO: Replace with google voice */}
            <div className={styles.socials} ><IconPhone />: 612-501-7047</div>
          </section>


        </div>



        <div>
          <header>
            <h2>Send a message_</h2>

          </header>



          <main>
            <MessageInput />
          </main>



          {/* <footer>
            Heres a footer for the card

          </footer> */}
        </div>

      </main>


    </section>
  );
}
