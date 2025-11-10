'use client'
import { useMediaQuery } from 'react-responsive';
import MenuMobile from './MenuMobile/MenuMobile';
import MenuDesktop from './MenuDesktop/MenuDesktop';
import styles from './Menu.module.scss';

interface IMenuProps {
    isOpen: boolean;
}

const Menu = ({ isOpen }: IMenuProps) => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const content = isMobile ? <MenuMobile /> : <MenuDesktop />
    return (
        <div className={`${styles.menu} ${isOpen ? styles.active : null}`}>
            <div className="container">
                {content}
            </div>
        </div>
    );
};

export default Menu;