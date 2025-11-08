import styles from './MainDesktop.module.scss';

function MainDesktop() {
    return (
        <section className={styles.main}>
            <div className="container">
                <div className={styles.main__content}>
                    <h1 className={styles.main__title}>Бытовая химия, косметика и хозтовары</h1>
                    <p className={styles.main__text}>оптом по кокчетаву и области</p>
                    <button className={`${styles.main__button} main-button-style`}>В КАТАЛОГ</button>
                    <div className={styles.advantage}>
                        <div className={styles.advantage__item}>
                            <div className={styles.advantage__plus}>+</div>
                            <p>Только самые <span>выгодные предложения</span></p>
                        </div>
                        <div className={styles.advantage__item}>
                            <div className={styles.advantage__plus}>+</div>
                            <p>
                                Бесплатная доставка <span>по <span>Кокчетаву от 10 тыс ₸</span></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainDesktop;