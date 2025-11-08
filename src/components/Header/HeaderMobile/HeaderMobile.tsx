import styles from './HeaderMobile.module.scss';
import SultanLogo from '../../../../public/icons/sultan-logo/sultan-logo.svg';
import CatalogIcon from '../../../../public/icons/cubes.svg';
import SearchIcon from '../../../../public/icons/magnifying-glass.svg';
import BasketItem from '@/components/BasketItem/BasketItem';
import Menu from '@/components/Menu/Menu';
import Link from 'next/link';

const HeaderMobile = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.header__wrapper} container`}>
                <div>
                    <div className={styles.header__top}>
                        <button className={styles.toggleMenu} type="button">
                            <div className={styles.toggleMenu__element}>
                                <span></span>
                            </div>
                        </button>
                        <Link href="/">
                            <SultanLogo />
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
                {/* <Menu /> */}
            </div>
        </header>
    )
}

export default HeaderMobile;