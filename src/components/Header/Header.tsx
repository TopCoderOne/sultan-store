'use client';
import styles from './Header.module.scss';
import { useMediaQuery } from 'react-responsive';
import HeaderDesktop from './HeaderDesktop/HeaderDesktop';
import HeaderMobile from './HeaderMobile/HeaderMobile';

const Header = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const content = isMobile ? <HeaderMobile /> : <HeaderDesktop />;
    return (
        <header className={styles.header}>
            {content}
        </header>
    );
};

export default Header;