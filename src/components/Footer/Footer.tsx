"use client"
import { useMediaQuery } from "react-responsive";
import FooterMobile from "./FooterMobile/FooterMobile";
import FooterDesktop from "./FooterDesktop/FooterDesktop";
import styles from './Footer.module.scss';

const Footer = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const FooterBody = isMobile ? <FooterMobile /> : <FooterDesktop />;

    return (
        <footer className={styles.footer}>
            <div className="container">
                {FooterBody}
            </div>
        </footer>
    );
};

export default Footer;