
import styles from "@/app/_styles/elements/techSkills.module.scss"
import {
    IconBrandReact,
    IconBrandNodejs,
    IconBrandVscode,
    IconBrandCss3,
    IconBrandSass,
    IconBrandJavascript,
    IconBrandTypescript,
    IconBrandMongodb,
    IconBrandDocker,
    IconBrandNextjs,
    IconBrandHtml5
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
                },
                {
                    label: "HTML",
                    icon: <IconBrandHtml5/>
                },
                {
                    label: "CSS",
                    icon: <IconBrandCss3 />
                },
                {
                    label: "SCSS",
                    icon: <IconBrandSass />
                },
            ]
        },
        {
            group: "Back End",
            skills: [
                {
                    label: "NodeJS",
                    icon: <IconBrandNodejs />
                },
                {
                    label: "Mongo DB",
                    icon: <IconBrandMongodb />
                },
                {
                    label: "Docker",
                    icon: <IconBrandDocker />
                }
            ]
        },
        {
            group: "Full Stack Tools / Languages",
            skills: [
                {
                    label: "Next JS",
                    icon: <IconBrandNextjs />
                },

                {
                    label: "Typescript",
                    icon: <IconBrandTypescript />
                },

                {
                    label: "Javascript",
                    icon: <IconBrandJavascript />
                },

                {
                    label: "VS Code",
                    icon: <IconBrandVscode />
                },
            ]
        }

    ]






    return (
        <section className={styles.container}>
            {
                cardData.map(({ group, skills }: SkillsCard) => {

                    return (
                        <>
                        <h2>{group}</h2>
                        <div
                            key={group}
                            className={styles.card}
                        >
                           
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
                        </>
                    )
                })
            }
        </section>


    )
}