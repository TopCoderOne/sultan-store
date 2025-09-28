import Link from 'next/link';
import styles from '../MenuDesktop/MenuDesktop.module.scss';
import LocationDot from '../../../../public/icons/location-dot.svg';
import Envelope from '../../../../public/icons/envelope.svg';

const MenuDesktop = () => {
    return (
        <div className={styles.content}>
            <div className={styles.contacts}>
                <div className={styles.address}>
                    <LocationDot id="location-dot" />
                    <p>
                        г. Кокчетав, ул. Ж. Ташенова 129Б
                        <span>(Рынок Восточный)</span>
                    </p>
                </div>
                <div className={styles.line39}></div>
                <div className={styles.email}>
                    <Envelope />
                    <p>
                        opt.sultan@mail.ru
                        <span>На связи в любое время</span>
                    </p>
                </div>
            </div>
            <nav className={styles.nav}>
                <Link className={styles.nav__link} href="/">О компании</Link>
                <div className={styles.line29}></div>
                <Link className={styles.nav__link} href="/">Доставка и оплата</Link>
                <div className={styles.line29}></div>
                <Link className={styles.nav__link} href="/">Возврат</Link>
                <div className={styles.line29}></div>
                <Link className={styles.nav__link} href="/">Контакты</Link>
            </nav>
        </div>
    );
};

export default MenuDesktop;