import styles from "@/app/_styles/layout/navbar.module.scss";
import LinkSection from "../elements/linkSection";
import Link from "next/link";
import Tag from "../elements/tag";

export default function Navbar({ links }: { links: Link[] }): JSX.Element {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <Tag />

        <LinkSection links={links} />
      </div>
    </nav>
  );
}
