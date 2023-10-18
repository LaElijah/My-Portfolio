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
import SegmentedButton from "./elements/segmentedButton";
import TechSkills from "./elements/techSkills";
import SoftSkills from "./elements/softSkills";




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


  const tabs = new Map()

  tabs.set("Tech Skills", <TechSkills />)
  tabs.set("Soft Skills", <SoftSkills />)
  
  
  
  
  
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

      
            <div className={styles.wrapper} >
              <h2 className="label">Get to know me_</h2>
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
            I&apos;m a web developer! My passion lies in
            creating things. I try to relate every hobby I have into creating
            something I can look back on, this is why I chose programming as my
            career path. My personal hobbies include but are not limited to:
            crocheting, baking, and making music. I like the feeling that seeing
            the product of my progressing craft gives me. Oppurtunities to expand my repertoire
          </h3>

          <div>
            <SegmentedButton tabs={tabs}
            />
          </div>


        
        </MotionRenderer>
      </section>
      </div>
    </>
  );
}
