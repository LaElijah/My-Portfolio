import Navbar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/layout/page.module.scss"
import "../globals.scss"


export default function App({ Component, pageProps }: any) {

    return (
        // TODO: Add layout
        <div className={styles.pageContainer}>
        <Navbar />
            <Component  {...pageProps} />
            <Footer />
            </div>

    );
}