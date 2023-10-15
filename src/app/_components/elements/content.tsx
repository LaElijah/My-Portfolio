import { ReactNode } from "react";

import "@/globals.scss";

export default function Content({
  children,
  className: styles,
}: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`content ${styles ? styles : ""}`}>
      <div>{children}</div>
    </div>
  );
}
