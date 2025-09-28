import Link from 'next/link';
import PriceListButton from '../../PriceListButton/PriceListButton';
import styles from './FooterDesktop.module.scss';
import global from '@/styles/global.module.scss';
import InputArrowRight from '../../../../public/icons/input-chevron-right.svg';
import WhatsApp from '../../../../public/icons/whatsApp.svg';
import Telegram from '../../../../public/icons/telegram.svg';
import Visa from '../../../../public/icons/visa.svg';
import MasterCard from '../../../../public/icons/master-card.svg';
import Image from 'next/image';


const FooterDesktop = () => {
    return (
        <div className={styles.content}>
            <div className={styles.footer__col}>
                <Image className={styles.logo} src="/images/footer/sultan-logo.png" width={156} height={66} alt="Султан" />
                <p className={styles.description}>
                    Компания «Султан» — снабжаем розничные магазины товарами &quot;под ключ&quot; в Кокчетаве
                    и Акмолинской области
                </p>

                <label className={styles["email-input-label"]} htmlFor="email-input">Подпишись на скидки и акции</label>
                <div className={`${styles} ${global["main-input-style"]}`}>
                    <input id="email-input" type="email" placeholder="Введите ваш E-mail" />
                    <button type="submit" title="Отправить">
                        <InputArrowRight />
                    </button>
                </div>
            </div>
            <div className={styles.links}>
                <h3>Меню сайта:</h3>
                <Link href="/">О компании</Link>
                <Link href="/">Доставка и оплата</Link>
                <Link href="/">Возврат</Link>
                <Link href="/">Контакты</Link>
            </div>
            <div className={styles.links}>
                <h3>Категории:</h3>
                <Link href="/">Бытовая химия</Link>
                <Link href="/">Косметика и гигиена</Link>
                <Link href="/">Товары для дома</Link>
                <Link href="/">Товары для детей и мам</Link>
                <Link href="/">Посуда</Link>
            </div>
            <div className={styles.messengers}>
                <h3>Скачать прайс-лист:</h3>
                <PriceListButton className={`${styles["price-list-button"]} ${global["main-button-style"]}`} />
                <p>Связь в мессенджерах:</p>
                <div className={styles.messengers__types}>
                    <div className={styles.whatsApp}>
                        <a href="https://web.whatsapp.com/" title="WhatsApp">
                            <WhatsApp />
                        </a>
                    </div>
                    <div className={styles.telegram}>
                        <a href="https://web.telegram.org/a/" title="Telegram">
                            <Telegram />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.contacts}>
                <h3>Контакты:</h3>
                <div className={styles.phone}>
                    <p>+7 (777) 490-00-91</p>
                    <p>время работы: 9:00-20:00</p>
                    <a href="tel:+77774900091">Заказать звонок</a>
                </div>
                <div className={styles.email}>
                    <a
                        href="mailto:oat.sultan@mail.ru&&cc=oat.sultan@mail.ru?"
                        target="_blank"
                        rel="noreferrer">
                        oat.sultan@mail.ru
                    </a>
                    <p>На связи в любое время</p>
                </div>
                <div className={styles["bank-cards"]}>
                    <Visa />
                    <MasterCard />
                </div>
            </div>
        </div>
    );
}

export default FooterDesktop;