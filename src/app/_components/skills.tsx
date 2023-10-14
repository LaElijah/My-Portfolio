
import styles from "@/app/_styles/components/skills.module.scss"
import {
    IconBrandReact,
    IconBrandNodejs,
    IconBrandSass,
    IconBrandNextjs,
    IconBrandMongodb,

} from "@tabler/icons-react"


type PrimarySkill = {
    logo: JSX.Element;
    label: string;
}
export function PrimarySkill({ logo, label }: PrimarySkill) {

    return (
        <div
            key={label}
            className={styles.primarySkills}
        >
            {logo}
            {label}
        </div>
    )
}
export default function Skills(): JSX.Element {


    const primarySkills: PrimarySkill[] = [

        {
            logo: <IconBrandReact />,
            label: "React"
        },

        {
            logo: <IconBrandSass />,
            label: "SCSS"
        },

        {
            logo: <IconBrandNextjs />,
            label: "NextJS"
        },

        {
            logo: <IconBrandNodejs />,
            label: "NodeJS / ExpressJS"
        },


        {
            logo: <IconBrandMongodb />,
            label: "MongoDB"
        },
    ]

    return (
        <section className={styles.container}>

            <header className={styles.primarySkills} >
                {primarySkills.map((skill: PrimarySkill) => {
                    return <PrimarySkill {...skill} key={skill.label} />
                })}
            </header>

            <main className={styles.about}>
                <h3>Who </h3>

                <div>
                    about
                </div>

                <div>
                    skills
                </div>
            </main>



        </section>
    )
}