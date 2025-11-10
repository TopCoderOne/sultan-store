import styles from './HeaderDesktop.module.scss';
import Link from "next/link";
import Image from "next/image";
import Menu from '../../Menu/Menu';
import PriceListButton from '../../PriceListButton/PriceListButton';
import Input from '@/components/Input/Input';
import BasketItem from '../../BasketItem/BasketItem';
import CatalogIcon from "../../../../public/icons/cubes.svg";
import SultanLogo from '../../../../public/icons/sultan-logo/sultan-logo.svg';
import SearchIcon from "../../../../public/icons/magnifying-glass.svg"

const HeaderDesktop = () => {
    return (
        <>
            <div className="container">
                <Menu />
            </div>
            <div className={styles.main}>
                <div className="container">
                    <div className={styles.content}>
                        <Link href="/">
                            <SultanLogo width="156" height="66" className={styles.logo} role="img" aria-label="Султан" />
                        </Link>
                        <Link className={styles.catalogLink} href="/CatalogPage">
                            <button className={`${styles["catalog-button"]} main-button-style`} type="button">
                                Каталог <CatalogIcon />
                            </button>
                        </Link>
                        <Input
                            type="email"
                            name="search"
                            placeholder="Поиск..."
                            className={"input-bg-light-gray"}
                            buttonIcon={SearchIcon}
                            buttonType="submit"
                            buttonTitle="Отправить"
                        />
                        <div className={styles.operator}>
                            <p>
                                +7 (777) 490-00-91
                                <span>время работы: 9:00-20:00</span>
                                <a href="tel:+77774900091">Заказать звонок</a>
                            </p>
                            <div className={styles.operator__image}>
                                <Image width="70" height="92" src="/images/header/technical-support-specialist.png" alt="Специалист технической поддержки" />
                                <div className={styles.operator__status}>
                                    <div className={styles["operator__status-online"]}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.line49}></div>
                        <PriceListButton className={`${styles["price-list-button"]} main-button-style`} />
                        <div className={styles.line49}></div>
                        <Link href="/BasketPage">
                            <BasketItem />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderDesktop;