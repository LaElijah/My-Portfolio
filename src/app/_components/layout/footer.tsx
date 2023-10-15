import styles from "@/app/_styles/layout/footer.module.scss";
import Link from "next/link";

type Link = {
  link: string;
  label: string;
  key: string | number;
};

export default function Footer({ links }: { links: Link[] }): JSX.Element {
  return (
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
  );
}
