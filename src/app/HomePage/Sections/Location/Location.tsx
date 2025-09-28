import global from '@/styles/global.module.scss';
import LocationDot from '../../../../../public/icons/location-dot.svg';
import FluentDocument from '../../../../../public/icons/fluent-document.svg';
import styles from './location.module.scss';

const Location = () => {
    return (
        <section className={styles.location}>
            <div className={global.container}>
                <div className={styles.map}>
                    <div className={styles.info}>
                        <h2 >Контакты</h2>
                        <p>Оптовый поставщик «Султан»</p>

                        <div className={styles.info__row}>
                            <div className={styles.address}>
                                <h4>Адрес:</h4>
                                <div>
                                    <LocationDot />
                                    <p>
                                        <span>г. Кокчетав, ул. Ж. Ташенова 129Б</span>
                                        <span>(Рынок Восточный)</span>
                                    </p>
                                </div>
                            </div>

                            <div className={styles["sales-department"]}>
                                <h4>Отдел продаж:</h4>
                                <p>
                                    <span>+7 (777) 490-00-91</span>
                                    <span>opt.sultan@mail.ru</span>
                                </p>
                            </div>
                        </div>
                        <div className={styles["taxpayer-data"]}>
                            <h4>Данные налогоплательщика:</h4>
                            <div>
                                <FluentDocument />
                                <p>
                                    <span>ИП Катран Д.С.</span>
                                    <span>ИИН: 860113450858</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src="/images/location/location.jpeg" alt="Местоположение" />

                    {/* <Image src="/images/location/location.jpeg" width={500} height={500} alt="Местоположение" /> */}
                </div>
            </div>
        </section>
    );
};

export default Location;