


import styles from '@/app/_styles/components/hero.module.scss'



export default function Hero() {


    return (
        <section className={styles.container}>

            <div className={styles.details}>

                <h2>Hi! my name is,</h2>
                <h1>Elijah Allotey,</h1>
                <h3>Developing solutions on the web!</h3>

                <button className={styles.button}>Contact me</button>
            </div>

            <div className={styles.skills}>
                skills
            </div>


            <div className={styles.image}>

                <img src={"/assets/bust.png"} />

            </div>

        </section>
    )
}