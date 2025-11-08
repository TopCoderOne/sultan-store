import styles from './FooterMobile.module.scss';
import Input from '@/components/Input/Input';
import Link from 'next/link';
import SultanLogo from '../../../../public/icons/sultan-logo/sultan-logo.svg';
import PriceListButton from '../../PriceListButton/PriceListButton';
import InputArrow from '../../../../public/icons/input-chevron-right.svg';
import WhatsApp from '../../../../public/icons/whatsApp.svg';
import Telegram from '../../../../public/icons/telegram.svg';
import MasterCard from '../../../../public/icons/master-card.svg';
import Visa from '../../../../public/icons/visa.svg';

const FooterMobile = () => {
    return (
        <div className={styles.content}>
            <div className={styles.row}>
                <Link className={styles.logo} href="/">
                    <SultanLogo role="img" aria-label="Логотип Султан" />
                </Link>
                <PriceListButton className={`${styles.priceListButton} main-button-style`} />
            </div>
            <p className={styles.description}>
                Компания «Султан» — снабжаем розничные магазины товарами &quot;под ключ&quot; в Кокчетаве
                и Акмолинской области
            </p>
            <label className={styles.emailInputLabel} htmlFor="email-subscription">Подпишись на скидки и акции</label>
            <Input
                id="email-subscription"
                className={`main-input-style ${styles.emailSubscription}`}
                type="email"
                name="email-subscription"
                placeholder="Введите ваш E-mail"
                buttonType="submit"
                buttonTitle="Отправить email"
                buttonIcon={InputArrow}
            />
            <div className={styles.links}>
                <div className={styles.links__item}>
                    <h3>Меню сайта:</h3>
                    <Link href="/">О компании</Link>
                    <Link href="/">Доставка и оплата</Link>
                    <Link href="/">Возврат</Link>
                    <Link href="/">Контакты</Link>
                </div>
                <div className={styles.links__item}>
                    <h3>Категории:</h3>
                    <Link href="/">Бытовая химия</Link>
                    <Link href="/">Косметика и гигиена</Link>
                    <Link href="/">Товары для дома</Link>
                    <Link href="/">Товары для детей и мам</Link>
                    <Link href="/">Посуда</Link>
                </div>
            </div>
            <div className={styles.contacts}>
                <h3>Контакты:</h3>
                <div className={styles.contacts__row}>
                    <div className={styles.phone}>
                        <p>+7 (777) 490-00-91</p>
                        <p>время работы: 9:00-20:00</p>
                        <Link href="tel:+77774900091">Заказать звонок</Link>
                    </div>
                    <div className={styles.messengers}>
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
                </div>
                <div className={styles.email}>
                    <Link
                        href="mailto:oat.sultan@mail.ru&&cc=oat.sultan@mail.ru?"
                        target="_blank"
                        rel="noopener noreferrer">
                        oat.sultan@mail.ru
                    </Link>
                    <p>На связи в любое время</p>
                </div>
            </div>
            <div className={styles.bankCards}>
                <Visa />
                <MasterCard />
            </div>
        </div>
    );
}

export default FooterMobile;