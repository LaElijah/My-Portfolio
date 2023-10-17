import styles from "@/app/_styles/pages/projects.module.scss";
import ProjectGrid from "@/app/_components/projectGrid";
import ProjectStack from "@/app/_components/projectStack";
import Content from "@/app/_components/elements/content";

export default function Project() {
  return (
    <div className={styles.container}>
      <Content>
       <ProjectStack />
        </Content>

      <Content>
        <ProjectGrid />
      </Content>
    </div>
  );
}
