import Link from 'next/link';
import Input from '@/components/Input/Input';
import styles from './FooterDesktop.module.scss';
import SultanLogo from '../../../../public/sultan-logo.svg';
import PriceListButton from '../../PriceListButton/PriceListButton';
import InputArrow from '../../../../public/icons/input-chevron-right.svg';
import WhatsApp from '../../../../public/icons/whatsApp.svg';
import Telegram from '../../../../public/icons/telegram.svg';
import Visa from '../../../../public/icons/visa.svg';
import MasterCard from '../../../../public/icons/master-card.svg';


const FooterDesktop = () => {
    return (
        <div className={styles.content}>
            <div>
                <Link className={styles.logo} href="/">
                    <SultanLogo role="img" aria-label="Султан" />
                </Link>
                <p className={styles.description}>
                    Компания &laquo;Султан&raquo;&nbsp;&mdash; снабжаем розничные магазины товарами &quot;под&nbsp;ключ&quot; в&nbsp;Кокчетаве и&nbsp;Акмолинской области
                </p>
                <label className={styles.emailInputLabel} htmlFor="email-subscription">Подпишись на скидки и акции</label>
                <Input
                    id="email-subscription"
                    className="main-input-style"
                    type="email"
                    name="email-subscription"
                    placeholder="Введите ваш E-mail"
                    buttonType="submit"
                    buttonTitle="Отправить email"
                    buttonIcon={InputArrow} />
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
                <PriceListButton className={`${styles.priceListButton} main-button-style`} />
                <p>Связь в мессенджерах:</p>
                <div className={styles.messengers__types}>
                    <div className={styles.whatsApp}>
                        <Link href="https://web.whatsapp.com/" title="WhatsApp">
                            <WhatsApp />
                        </Link>
                    </div>
                    <div className={styles.telegram}>
                        <Link href="https://web.telegram.org/a/" title="Telegram">
                            <Telegram />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.contacts}>
                <h3>Контакты:</h3>
                <div className={styles.phone}>
                    <p>+7 (777) 490-00-91</p>
                    <p>время работы: 9:00-20:00</p>
                    <Link href="tel:+77774900091">Заказать звонок</Link>
                </div>
                <div className={styles.email}>
                    <Link
                        href="mailto:oat.sultan@mail.ru&&cc=oat.sultan@mail.ru?"
                        target="_blank"
                        rel="noreferrer">
                        oat.sultan@mail.ru
                    </Link>
                    <p>На связи в любое время</p>
                </div>
                <div className={styles.bankCards}>
                    <Visa />
                    <MasterCard />
                </div>
            </div>
        </div>
    );
}

export default FooterDesktop;