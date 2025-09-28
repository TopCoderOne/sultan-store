import styles from './mainMobile.module.scss';
import global from '../../../../../styles/global.module.scss';

function MainMobile() {
    return (
        <section className={styles.main}>
            <div className={global.container}>
                <div className={styles.main__content}>
                    <h1 className={styles.main__title}>Бытовая химия, косметика и хозтовары</h1>
                    <p className={styles.main__text}>оптом по кокчетаву и области</p>
                </div>

                <div className={styles["profitable-offer"]}>
                    <div className={styles["profitable-offer__item"]}>
                        <div className={styles["profitable-offer__plus"]}>+</div>
                        <p>Только самые выгодные предложения</p>
                    </div>
                    <div className={styles["profitable-offer__item"]}>
                        <div className={styles["profitable-offer__plus"]}>+</div>
                        <p>Бесплатная доставка по <span>Кокчетаву от 10 тыс ₸</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainMobile;