"use client"

import styles from "@/app/_styles/elements/segmentedButton.module.scss";
import { useState } from "react"







// TODO: Edit any on Map typing 

export default function SegmentedButton({
  tabs,
}: { tabs: Map<string, any> }): JSX.Element {
  const labels: string[] = Array.from(tabs.keys())
  const [activeTab, setActiveTab] = useState(labels[0])



  return (
    <div className={styles.container}>
      <header className={styles.tabGroup}>
        {labels.map((label) => {
          return <div onClick={() => setActiveTab(label)} className={activeTab === label ? styles.activeTab : styles.tab} key={label}><h3>{label}</h3></div>;
        })}
      </header>

      <main className={styles.content}>
        {tabs.get(activeTab)}
      </main>
    </div>
  );
}
