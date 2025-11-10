import Link from 'next/link';
import styles from './Contacts.module.scss';
import LocationDot from '../../../../../public/icons/location-dot.svg';
import FluentDocument from '../../../../../public/icons/fluent-document.svg';

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={`${styles.contacts__wrapper} container`}>
                <div className={styles.contacts__info}>
                    <h2>Контакты</h2>
                    <address className={styles.contacts__infoWrapper}>
                        <p>Оптовый поставщик «Султан»</p>
                        <div className={styles.contacts__infoDetails}>
                            <div className={styles.address}>
                                <p className={styles.address__title}>Адрес:</p>
                                <div className={styles.address__wrapper}>
                                    <LocationDot />
                                    <p className={styles.address__info}>
                                        <span>г. Кокчетав, ул. Ж. Ташенова 129Б</span>
                                        <span>(Рынок Восточный)</span>
                                    </p>
                                </div>
                            </div>
                            <div className={styles.salesDepartment}>
                                <p className={styles.salesDepartment__title}>Отдел продаж:</p>
                                <p className={styles.salesDepartment__info}>
                                    <Link href="tel:+77774900091">+7 (777) 490-00-91</Link>
                                    <Link href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru</Link>
                                </p>
                            </div>
                            <div className={styles.taxpayerData}>
                                <p className={styles.taxpayerData__title}>Данные налогоплательщика:</p>
                                <div className={styles.taxpayerData__wrapper}>
                                    <FluentDocument />
                                    <p className={styles.taxpayerData__info}>
                                        <span>ИП Катран Д.С.</span>
                                        <span>ИИН: 860113450858</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </address>
                </div>
                <div className={styles.contacts__map}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A19c87e2a17257158c354ec32fbe5a93f1514ee340514f332664ed7188f6bd222&amp;source=constructor"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        title="Оптовый поставщик «Султан» – г. Кокчетав, ул. Ж. Ташенова 129Б(Рынок Восточный)"
                        allowFullScreen
                        sandbox="allow-scripts allow-same-origin"
                        loading="lazy"
                    >
                        Ваш браузер не поддерживает встроенные фреймы.
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Contacts;