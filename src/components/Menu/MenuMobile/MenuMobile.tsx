import PriceListButton from '../../PriceListButton/PriceListButton'
import styles from './MenuMobile.module.scss';
import global from '../../../styles/global.module.scss';
import LocationDot from '../../../../public/icons/location-dot.svg';
import Envelope from '../../../../public/icons/envelope.svg';
import PhoneBlue from '../../../../public/icons/phone-blue.svg';
import PhoneWhite from '../../../../public/icons/phone-white.svg';
import Link from 'next/link';

const MenuMobile = () => {
    return (
        <>
            <div className={styles.contacts}>
                <div className={styles.address}>
                    <LocationDot />
                    <p>
                        г. Кокчетав, ул. Ж. Ташенова 129Б
                        <span>(Рынок Восточный)</span>
                    </p>
                </div>
                <div className={styles.email}>
                    <Envelope />
                    <p>
                        opt.sultan@mail.ru
                        <span>На связи в любое время</span>
                    </p>
                </div>
                <div className={styles.phone}>
                    <PhoneBlue />
                    <p>
                        Отдел продаж
                        <span>+7 (777) 490-00-91</span>
                        <span>время работы: 9:00-20:00</span>
                    </p>
                </div>
                <a className={styles["request-call"]} href="">
                    <div>
                        <PhoneWhite />
                    </div>
                    <span>Заказать звонок</span>
                </a>
            </div>
            <div className={styles.menu}>
                <h2 className={styles.menu__title}>Меню сайта:</h2>
                <nav className={styles.nav}>
                    <Link className={styles.nav__link} href="/">О компании</Link>
                    <Link className={styles.nav__link} href="/">Доставка и оплата</Link>
                    <Link className={styles.nav__link} href="/">Возврат</Link>
                    <Link className={styles.nav__link} href="/">Контакты</Link>
                </nav>
                <PriceListButton
                    className={`${styles["price-list-button"]} ${global["main-button-style"]}`} />
            </div>
        </>
    );
};

export default MenuMobile;