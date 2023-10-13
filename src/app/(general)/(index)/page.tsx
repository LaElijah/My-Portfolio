import Hero from "@/app/_components/hero"
import Skills from "@/app/_components/skills"
import Projects from "@/app/_components/projects"
import styles from '@/app/_styles/pages/index.module.scss'


export default async function Index() {



    return (
        <div className={styles.container}>

            <Hero />
            <Skills />
            <Projects />



        </div>
    )
}