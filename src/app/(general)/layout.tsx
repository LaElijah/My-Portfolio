import styles from "@/app/_styles/layout/root.module.scss"
import InConstruction from "../temp/temp";
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from "@mantine/core"


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
  
}

import Navbar from "../_components/layout/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const links = [
    { name: 'About', key: 0 },
    { name: 'Projects', key: 1 },
    { name: 'Contact', key: 2 },
  ]

  return (

    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body className={styles.page}>

        <MantineProvider>
          {(process.env.BUILD === 'development') && (

            <>
              <Navbar links={links} />
              <div className={styles.content}>
                <div className={styles.wrapper}>
                {children}
                </div>
              </div>
            </>

          )}
          {(process.env.BUILD !== 'development') && (
            <InConstruction />
          )}

        </MantineProvider>

      </body>
    </html>
  )
}
