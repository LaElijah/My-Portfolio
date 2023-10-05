import Hero from "@/app/_components/hero"
import Skills from "@/app/_components/skills"
import styles from '@/app/_styles/pages/index.module.scss'

export default async function Index() {



    return (
        <div className={styles.container}>

            <Hero />
            <Skills />



        </div>
    )
}