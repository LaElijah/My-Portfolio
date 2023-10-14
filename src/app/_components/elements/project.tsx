import Image from "next/image";
import styles from "@/app/_styles/elements/project.module.scss";

export default function Project({
  title,
  image,
  details,
  tools,
  alt,
}: ProjectItem): JSX.Element {
  return (
    <div className={styles.container}>
      <Image alt={alt} width={320} height={200} src={image} />

      <h2>{title}</h2>

      <h3>{details}</h3>

      {tools.map(({ label, icon }: Tool): JSX.Element => {
        return (
          <div className={styles.tool} key={label}>
            {icon}
            <h3>{label}</h3>
          </div>
        );
      })}
    </div>
  );
}
