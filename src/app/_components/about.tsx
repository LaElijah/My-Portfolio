import styles from "@/app/_styles/components/about.module.scss";
import MotionRenderer from "./elements/motionRenderer";

export default function About(): JSX.Element {
  return (
    <MotionRenderer whileHover={{ scale: 1.1 }}>
      <h2 className="label">Who am i?</h2>

      <section className={styles.container}>
        <div>Some image</div>

        <div>
          <h3>
            I&apos;m a creative fullstack web developer, my passion lies in
            creating things. I try to relate every hobby I have into creating
            something I can look back on, this is why I chose programming as my
            career path. My personal hobbies include but are not limited to:
            crocheting, baking, and making music. I like the feeling that seeing
            the product of my progressing craft gives me.
          </h3>

          <h3>
            I&apos;m looking for job and mentorship oppurtunities in the web
            developer field. I&apos;m especially interested in community
            projects, and projects that involve a user base. Im interested in
            any oppurtunity that allows me to expand my repertoire. If
            you&apos;re a potential client for a freelance project,{" "}
            <span className={styles.clickMe}>click here</span> to get in touch.
          </h3>
        </div>
      </section>
    </MotionRenderer>
  );
}
