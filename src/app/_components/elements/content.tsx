import "@/globals.scss";

export default function Content({
  children,
  className: styles,
  customContentBox = false,
}: {
  children: JSX.Element | JSX.Element[]; // TODO: Edit type for this
  className?: string;
  customContentBox?: boolean;
}): JSX.Element {
  return (
    <section
      className={`${!customContentBox ? `content` : ``} ${
        styles ? styles : ""
      }`}
    >
      <div>{children}</div>
    </section>
  );
}
