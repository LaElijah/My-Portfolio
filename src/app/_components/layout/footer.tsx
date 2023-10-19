import styles from "@/app/_styles/layout/footer.module.scss";
import Link from "next/link";
import Content from "@/app/_components/elements/content"


type Link = {
  link: string;
  label: string;
  key: string | number;
};

export default function Footer({ links }: { links: Link[] }): JSX.Element {
  return (
    <Content className={styles.container}>
    <section className={styles.container}>
      
      <div className={styles.details}>Heres my footer</div>

      <div className={styles.links}>
        {links.map(({ link, label, key }: Link) => (
          <Link key={link} href={link}>
            {label}
          </Link>
        ))}
      </div>
    </section>
    </Content>
  );
}
