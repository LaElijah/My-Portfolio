


import styles from '@/app/_styles/components/hero.module.scss'



export default function Hero() {


    return (
        <section className={styles.container}>


            <div className={styles.hook}>


                <div className={styles.details}>

                    <h2>Hi! my name is,</h2>
                    <h1>Elijah Allotey,</h1>
                    <h3>Developing solutions on the web!</h3>

                    <button className={styles.button}><p>Contact me</p></button>
                </div>

                <div className={styles.socials}>
                    socials
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