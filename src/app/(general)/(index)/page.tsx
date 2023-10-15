import Hero from "@/app/_components/hero";
import About from "@/app/_components/about";
import Projects from "@/app/_components/projects";
import styles from "@/app/_styles/pages/index.module.scss";
import Contact from "@/app/_components/contact";
import Content from "@/app/_components/elements/content";

export default async function Index() {
  const sections: Section[] = [
    {
      page: <Hero />,
      key: 0,
    },
    {
      page: <About />,
      className: styles.about,
      key: 0,
    },
    {
      page: <Projects />,
      key: 2,
    },
    {
      page: <Contact />,
      key: 3,
    },
  ];

  return (
    <div className={styles.container}>
      {sections.map(({ page, key, className }: Section) => (
        <Content className={className} key={key}>
          {page}
        </Content>
      ))}
    </div>
  );
}
