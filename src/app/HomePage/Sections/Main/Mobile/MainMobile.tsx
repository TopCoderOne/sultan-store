import styles from './MainMobile.module.scss';

function MainMobile() {
    return (
        <section className={styles.main}>
            <div className={`${styles.main__wrapper} container`}>
                <div className={styles.main__content}>
                    <h1 className={styles.main__title}>Бытовая химия, косметика и хозтовары</h1>
                    <p className={styles.main__text}>оптом по кокчетаву и области</p>
                </div>
            </div>

            <div className={`${styles.advantage} container`}>
                <div className={styles.advantage__item}>
                    <div className={styles.advantage__plus}>+</div>
                    <p>Только самые выгодные предложения</p>
                </div>
                <div className={styles.advantage__item}>
                    <div className={styles.advantage__plus}>+</div>
                    <p>Бесплатная доставка по <span>Кокчетаву от 10 тыс ₸</span></p>
                </div>
            </div>
        </section>
    );
}

export default MainMobile;