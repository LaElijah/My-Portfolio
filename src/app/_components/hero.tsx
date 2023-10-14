import styles from "@/app/_styles/components/hero.module.scss";
import Link from "next/link";
import { Tooltip } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCode,
  IconBrandDiscord,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandSass,
  IconBrandNextjs,
  IconBrandMongodb,
} from "@tabler/icons-react";

export function PrimarySkill({ logo, label }: PrimarySkill) {
  return (
    <div key={label} className={styles.primarySkill}>
      {logo}
      <h3>{label}</h3>
    </div>
  );
}

export default function Hero(): JSX.Element {
  const iconSize = {
    width: 32,
    height: 32,
  };

  // const iconFormat = ( isMobile
  //     ? {
  //     width: 64,
  //     height: 64
  // }
  // : {
  //     width: 128,
  //     height: 128

  // })

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

  const socials: Social[] = [
    {
      label: "Github",
      link: "/contact",
      icon: <IconBrandGithub {...iconSize} />,
    },
    {
      label: "LinkedIn",
      link: "/contact",
      icon: <IconBrandLinkedin {...iconSize} />,
    },
    {
      label: "Discord",
      link: "/contact",
      icon: <IconBrandDiscord {...iconSize} />,
    },
    {
      label: "Resume",
      link: "/contact",
      icon: <IconFileCode {...iconSize} />,
    },
  ];

  return (
    <>
      <section className={styles.container}>
        <div className={styles.hook}>
          <div className={styles.details}>
            <h2>Hi! my name is,</h2>
            <h1>Elijah Allotey,</h1>
            <h3>
              Im a web developer! I use my skills to make creative solutions to
              problems.
            </h3>

            <Link href="#contact" className={styles.button}>
              <p>Contact me</p>
            </Link>

            <div className={styles.socials}>
              {socials.map(({ label, link, icon }: Social) => (
                <Tooltip key="label" label={label}>
                  <Link href={link}>{icon}</Link>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.media}>
          <div className={styles.image}>
            <img alt="Portrait art" src={"/assets/bust.png"} />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <h2>My favorite tech_</h2>

        <div className={styles.primarySkillsGroup}>
          {primarySkills.map((skill: PrimarySkill) => {
            return <PrimarySkill {...skill} key={skill.label} />;
          })}
        </div>
      </footer>
    </>
  );
}
