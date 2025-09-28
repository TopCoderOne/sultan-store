import styles from './ProductCategories.module.scss';
import global from '@/styles/global.module.scss';

function ProductCategories () {
    return(
            <section className={global.section}>
                <div className={global.container}>
                    <div className={global.section__header}>
                        <h2 className={global.section__title}><span>категории</span> товаров</h2>
                        <p className={global.section__text}>10 000+ ходовых позиций по спецмальным ценам</p>
                    </div>

                    <div className={styles.categories}>
                        <a className={styles.categories__item} href="">
                            <div className={styles["img-wrapper"]}>
                                <img src="/images/product-category/image-1.png" alt="Бытовая химия" />
                            </div>
                            <p>Бытовая химия</p>
                        </a>
                        <a className={styles.categories__item} href="">
                            <div className={styles["img-wrapper"]}>
                                <img src="/images/product-category/image-2.png" alt="Косметика и гигиена" />
                            </div>
                            <p>Косметика и гигиена</p>
                        </a>
                        <a className={styles.categories__item} href="">
                            <div className={styles["img-wrapper"]}>
                                <img src="/images/product-category/image-3.png" alt="Товары для дома" />
                            </div>
                            <p>Товары для дома</p>
                        </a>
                        <a className={styles.categories__item} href="">
                            <div className={styles["img-wrapper"]}>
                                <img src="/images/product-category/image-4.png" alt="Товары для детей и мам" />
                            </div>
                            <p>Товары для детей и мам</p>
                        </a>
                        <a className={styles.categories__item} href="">
                            <div className={styles["img-wrapper"]}>
                                <img src="/images/product-category/image-5.png" alt="Посуда" />
                                <img src="/images/product-category/image-5.png" alt="Посуда" />
                            </div>
                            <p>Посуда</p>
                        </a>
                    </div>
                </div>
            </section>
    );
}

export default ProductCategories;