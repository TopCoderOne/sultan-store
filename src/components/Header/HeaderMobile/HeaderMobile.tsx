import styles from './HeaderMobile.module.scss';
import SultanLogo from '../../../../public/icons/sultan-logo/sultan-logo.svg';
import CatalogIcon from '../../../../public/icons/cubes.svg';
import SearchIcon from '../../../../public/icons/magnifying-glass.svg';
import BasketItem from '@/components/BasketItem/BasketItem';
import Menu from '@/components/Menu/Menu';
import Link from 'next/link';
import { useState } from 'react';

const HeaderMobile = () => {
    const [menu, menuIsOpen] = useState<boolean>(false);

    return (
        <>
            <div className={styles.h}>
                <div className={`${styles.header__top} container`}>
                    <button className={styles.toggleMenu} type="button" onClick={() => menuIsOpen(!menu ? true : false)}>
                        <div className={styles.toggleMenu__element}>
                            <span></span>
                        </div>
                    </button>
                    <Link href="/">
                        <SultanLogo className={styles.logo} role="img" aria-label="Султан" />
                    </Link>
                    <Link href="/BasketPage">
                        <BasketItem />
                    </Link>
                </div>
                <div className={styles.header__bottom}>
                    <Link href="/CatalogPage">
                        <button className={styles.catalogButton} type="button">
                            <CatalogIcon /> Каталог
                        </button>
                    </Link>
                    <div className={styles.line30}></div>
                    <button className={styles.searchButton} type="button">
                        <SearchIcon /> Поиск
                    </button>
                </div>
            </div>
            <Menu isOpen={menu} />
        </>
    )
}

export default HeaderMobile;