import styles from "@/app/_styles/layout/footer.module.scss";
import Link from "next/link";
import Content from "@/app/_components/elements/content"
import { Tooltip } from "@mantine/core";

// Social links 


import {
  IconBrandGithub, 
  IconBrandLinkedin,
  IconBrandDiscord,
} from "@tabler/icons-react"

const Socials = () => {
  const iconFormat = {
    width: 32,
    height: 32
  }
  const socialLinks = [ 
    {
    icon: <IconBrandDiscord {...iconFormat} />,
    label: "Discord"
  },
   {
    icon: <IconBrandLinkedin {...iconFormat} />,
    label: "Linkedin"
  },
   {
    icon: <IconBrandGithub {...iconFormat} />,
    label: "Githu"
  },
]
  return socialLinks.map(({icon, label}) => <Tooltip key={label} label={label}>{icon}</Tooltip>)
}


type Link = {
  link: string;
  label: string;
  key: string | number;
};

export default function Footer({ links }: { links: Link[] }): JSX.Element {
  return (
    <Content className={styles.container}>

      <div className={styles.wrapper}>
      
      <section>
        {links.map(({ link, label, key }: Link) => (
          <Link key={key} href={link}>
            {label}
          </Link>
        ))}
      </section>

      <section>
        <Socials />

      </section>

      </div>
    </Content>
  );
}
