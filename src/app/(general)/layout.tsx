
import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import Footer from "@/app/_components/layout/footer";
import Navbar from "../_components/layout/navbar";
import "@/fonts.css"
import "@/globals.scss";

export const metadata = {
  title: "LaElijah",
  description: "Elijah Allotey. A web developer, creating solutions on the web for yout next idea.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links: Link[] = [
    { label: "Projects", link: "/projects", key: 0 },
    { label: "Blog", link: "/blog", key: 1 },
  ];

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <ColorSchemeScript />
      </head>

      <body>
        <MantineProvider>
       
              <Navbar links={links} />
              {children}
              <Footer links={links} />
        
       
        </MantineProvider>
      </body>
    </html>
  );
}
