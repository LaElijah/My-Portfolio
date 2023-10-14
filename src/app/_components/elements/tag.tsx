import styles from "@/app/_styles/elements/tag.module.scss";
import Image from "next/image";

export default function Tag(): JSX.Element {
  return (
    <div className={styles.container}>
      <Image
        width={48}
        height={48}
        alt="avatar"
        className={styles.image}
        src="/assets/avatar.png"
      />
      <h3>Elijah Allotey</h3>
    </div>
  );
}
