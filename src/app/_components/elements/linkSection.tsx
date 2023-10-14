import styles from "@/app/_styles/elements/links.module.scss";
import Dropdown from "./dropdown";
import LinkTabs from "./linkTabs";

export default function LinkSection({ links }: { links: Link[] }): JSX.Element {
  return (
    <section className={styles.container}>
      <Dropdown links={links} />

      <LinkTabs links={links} />
    </section>
  );
}
