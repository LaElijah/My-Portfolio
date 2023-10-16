import "@/globals.scss";
import { ReactPortal } from "react";

export default function Content({
  children,
  className: styles,
}: {
  children: JSX.Element | JSX.Element[]; // TODO: Edit type for this 
  className?: string;
}): JSX.Element {
  return (
    <section className={`content ${styles ? styles : ""}`}>
      <div>{children}</div>
    </section>
  );
}
