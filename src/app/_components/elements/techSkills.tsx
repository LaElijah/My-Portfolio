
import styles from "@/app/_styles/elements/techSkills.module.scss"
import {
    IconBrandReact,
    IconBrandNodejs,
    IconBrandVscode
} from "@tabler/icons-react"


// I could have three sections here.
// Front end technology
// Backend Technology
// Fullstack, halfway tech and other tech that helps me 
// get there, Like vs code or next

type Skill = {
    label: string,
    icon: JSX.Element,
}

type SkillsCard = {
    group: string,
    skills: Skill[]
}

export default function TechSkills() {

    const cardData: SkillsCard[] = [
        {
            group: "Front End",
            skills: [
                {
                    label: "React",
                    icon: <IconBrandReact />
                }
            ]
        },
        {
            group: "Back End",
            skills: [
                {
                    label: "NodeJS",
                    icon: <IconBrandNodejs />
                }
            ]
        },
        {
            group: "Full Stack / Tools",
            skills: [
                {
                    label: "VS Code",
                    icon: <IconBrandVscode />
                }
            ]
        }

    ]






    return (
        <section className={styles.container}>
            {
                cardData.map(({ group, skills }: SkillsCard) => {

                    return (
                        <div
                            key={group}
                            className={styles.card}
                        >
                            <h2>{group}</h2>
                            {
                                skills.map(({ label, icon }: Skill) => {

                                    return (
                                        <div
                                            className={styles.skill}
                                            key={label}
                                        >

                                            <h2>{label}</h2>
                                            {icon}

                                        </div>
                                    )
                                })
                            }

                        </div>
                    )
                })
            }
        </section>


    )
}