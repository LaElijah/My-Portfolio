import Hero from "@/app/_components/hero"
import Skills from "@/app/_components/skills"
import styles from '@/app/_styles/pages/index.module.scss'
import About from "@/app/_components/about"
import FeaturedProject from "@/app/_components/featuredProject"
import { IconSection } from "@tabler/icons-react"

export default async function Index() {



    return (
        <div className={styles.container}>

            <section id="contained">
                <Hero />
                {/* <Skills /> */}
                <About />
            </section>


            <FeaturedProject />


            <div id="contained">
                
                </div>



        </div>
    )
}