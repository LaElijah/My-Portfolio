


import styles from '@/app/_styles/components/hero.module.scss';
import Link from "next/link";
import { 
    IconBrandGithub,
    IconBrandLinkedin,
    IconFileCode,
    IconBrandDiscord

} from '@tabler/icons-react';


export default function Hero() {

    const iconSize = {
        width: 32,
        height: 32
    }

    return (
        <section className={styles.container}>


            <div className={styles.hook}>


                <div className={styles.details}>

                    <h2>Hi! my name is,</h2>
                    <h1>Elijah Allotey,</h1>
                    <h3>Developing solutions on the web!</h3>

                    <Link href="/contact" className={styles.button}><p>Contact me</p></Link>

                    <div className={styles.socials}>
                        <a href="/contact" ><IconBrandGithub {...iconSize} /></a>
                        <a href="/contact" ><IconBrandLinkedin {...iconSize} /></a>
                        <a href="/contact" ><IconBrandDiscord {...iconSize} /></a>
                        <a href="/contact" ><IconFileCode {...iconSize} /></a>
                    </div>
                    
                </div>



            </div>

            <div className={styles.media}>


                <div className={styles.image}>

                    <img src={"/assets/bust.png"} />

                </div>

            </div>

        </section>
    )
}