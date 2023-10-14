import Hero from "@/app/_components/hero";
import About from "@/app/_components/about";
import Projects from "@/app/_components/projects";
import styles from "@/app/_styles/pages/index.module.scss";
import Contact from "@/app/_components/contact";

export default async function Index() {
  return (
    <div className={styles.container}>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
