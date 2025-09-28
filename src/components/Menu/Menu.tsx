'use client'

import { useMediaQuery } from 'react-responsive';
import MenuMobile from './MenuMobile/MenuMobile';
import MenuDesktop from './MenuDesktop/MenuDesktop';
import styles from './Menu.module.scss';
import global from '../../styles/global.module.scss';

const Menu = () => {
    const isMobile = useMediaQuery({query: '(max-width: 700px)'});
    const MenuBody = isMobile ? <MenuMobile /> : <MenuDesktop />
    return (
        <div className={styles.menu}>
            <div className={global.container}>
                {MenuBody}
            </div>
        </div>
    );
};

export default Menu;