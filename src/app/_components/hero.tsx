import styles from "@/app/_styles/components/hero.module.scss";
import Link from "next/link";
import { Tooltip } from "@mantine/core";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCode,
  IconBrandDiscord,
} from "@tabler/icons-react";


export default async function Hero(): Promise<JSX.Element> {
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
      <section className={styles.container}>
        <div className={styles.hook}>
          <div className={styles.details}>
            <h2>Hi! my name is,</h2>
            <h1>Elijah Allotey</h1>
            <h3>
              Developing solutions on the web for your next idea. 
              Searching for collaborative oppurtunities.
            </h3>

            <Link href="#contact" className={styles.button}>
              <p>Contact me</p>
            </Link>

            <div className={styles.socials}>
              {socials.map(({ label, link, icon }: Social) => (
                <Tooltip key={label} label={label}>
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
  );
}
