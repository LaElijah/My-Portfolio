"use client";
import { useMediaQuery } from "@mantine/hooks";
import styles from "@/app/_styles/elements/tabs.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function LinkTabs({
  links,
}: {
  links: Link[];
}): JSX.Element | undefined {
  
  const pathname = (usePathname()).split('/')[1]
  const serialzedPath = `${pathname.charAt(0).toUpperCase()}${pathname.split(pathname.charAt(0))[1]}`
  const selected = (serialzedPath !== "undefined") ? serialzedPath : "Home"

 
  if (useMediaQuery("(min-width: 769px)")) {
    return (
      <div className={styles.container}>
        <Link
          href="/"
          className={"Home" === selected ? styles.activeLink : styles.link}
          key={99}
        >
          Home
        </Link>
        {links.map(({ label, link, key }: Link): JSX.Element => {
          return (
            <Link
              href={link}
              className={label === selected ? styles.activeLink : styles.link}
              key={key}
            >
              {label}
            </Link>
          );
        })}
      </div>
    );
  }
}
