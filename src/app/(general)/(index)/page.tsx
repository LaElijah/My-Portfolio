import Hero from "@/app/_components/hero"
import Skills from "@/app/_components/skills"
import styles from '@/app/_styles/pages/index.module.scss'
import About from "@/app/_components/about"
import FeaturedProject from "@/app/_components/featuredProject"
import ContactMe from "@/app/_components/contactMe"
import Projects from "@/app/_components/projects"

export default async function Index() {



    return (
        <div className={styles.container}>

            <div id="contained">
                <Hero />
                {/* <Skills /> */}
                <About />
            </div>


            <FeaturedProject />


            <div id="contained">
                <Projects />
            </div>

            <ContactMe />

        </div>
    )
}