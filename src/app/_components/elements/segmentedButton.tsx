import styles from "@/app/_styles/elements/segmentedButton.module.scss";

export default function SegmentedButton({
  selections,
}: {
  selections: string[];
}): JSX.Element {
  return (
    <div className={styles.container}>
      {selections.map((selection) => {
        return <div key={selection}>{selection}</div>;
      })}
    </div>
  );
}
