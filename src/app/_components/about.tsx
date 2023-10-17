import styles from "@/app/_styles/components/about.module.scss";
import MotionRenderer from "./elements/motionRenderer";
import Image from "next/image";
import {
  IconBrandReact,
  IconBrandNodejs,
  IconBrandSass,
  IconBrandNextjs,
  IconBrandMongodb,
} from "@tabler/icons-react";

export async function PrimarySkill({ logo, label }: PrimarySkill) {
  return (
    <div key={label} className={styles.primarySkill}>
      {logo}
      <h3>{label}</h3>
    </div>
  );
}

export default function About(): JSX.Element {
    const logoFormat = {
    width: 48,
    height: 48,
  };

  const primarySkills: PrimarySkill[] = [
    {
      logo: <IconBrandReact {...logoFormat} />,
      label: "React",
    },

    {
      logo: <IconBrandSass {...logoFormat} />,
      label: "SCSS",
    },

    {
      logo: <IconBrandNextjs {...logoFormat} />,
      label: "NextJS",
    },

    {
      logo: <IconBrandNodejs {...logoFormat} />,
      label: "NodeJS",
    },

    {
      logo: <IconBrandMongodb {...logoFormat} />,
      label: "MongoDB",
    },
  ];
  
  
  
  
  
  return (
    <>
     <header className={styles.header}>
        <h2>My favorite tech_</h2>

        <div className={styles.primarySkillsWrapper}>
          <div className={styles.primarySkillsGroup}>
            {primarySkills.map((skill: PrimarySkill) => {
              return <PrimarySkill {...skill} key={skill.label} />;
            })}
          </div>
        </div>
      </header>

      <h2 className="label">Who am i?</h2>

      <section className={styles.container}>
        <div>
          <Image
            alt="Self Portrait"
            height={224}
            width={224}
            src="/assets/self_portrait.jpeg"
          />
        </div>
        <MotionRenderer

        // initial={{ y: 80, opacity: 0.5 }}

        // transition={{ delay: 0.001 }}
        // whileInView={{ y: 0, opacity: 1 }}
        >
          <h3>
            I&apos;m a creative fullstack web developer, my passion lies in
            creating things. I try to relate every hobby I have into creating
            something I can look back on, this is why I chose programming as my
            career path. My personal hobbies include but are not limited to:
            crocheting, baking, and making music. I like the feeling that seeing
            the product of my progressing craft gives me.
          </h3>

          <h3>
            I&apos;m looking for job and mentorship oppurtunities in the web
            developer field. I&apos;m especially interested in community
            projects, and projects that involve a user base. Im interested in
            any oppurtunity that allows me to expand my repertoire. If
            you&apos;re a potential client for a freelance project,{" "}
            <span className={styles.clickMe}>click here</span> to get in touch.
          </h3>
        </MotionRenderer>
      </section>
    </>
  );
}
