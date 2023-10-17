import Hero from "@/app/_components/hero";
import About from "@/app/_components/about";
import ProjectStack from "@/app/_components/projectStack";
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
      key: 1,
    },
    {
      page: <ProjectStack />,
      className: styles.projectStack,
      key: 2,
    },
    {
      page: <Contact />,
      className: styles.contact,
      key: 3,
    },
  ];

  return (
    <div className={styles.container}>
      {sections.map(({ page, key, ...props }: Section) => (
        <Content key={key} {...props}>
          {page}
        </Content>
      ))}
    </div>
  );
}
