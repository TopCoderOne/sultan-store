import Image from 'next/image';
import styles from './ProductCategories.module.scss';
import Link from 'next/link';

const ProductCategories = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title"><span>Категории</span> товаров</h2>
                    <p className="section__text">10&nbsp;000+ ходовых позиций по&nbsp;спецмальным ценам</p>
                </div>
                <div className={styles.categories}>
                    <Link className={styles.categories__item} href="#">
                        <figure>
                            <Image width={250} height={250} loading="lazy" src="/images/product-category/household-chemicals.png" alt="Бытовая химия" />
                            <figcaption>Бытовая химия</figcaption>
                        </figure>
                    </Link>
                    <Link className={styles.categories__item} href="#">
                        <figure>
                            <Image width={250} height={250} loading="lazy" src="/images/product-category/cosmetics-and-hygiene.png" alt="Косметика и гигиена" />
                            <figcaption>Косметика и&nbsp;гигиена</figcaption>
                        </figure>
                    </Link>
                    <Link className={styles.categories__item} href="#">
                        <figure>
                            <Image width={250} height={250} loading="lazy" src="/images/product-category/household-goods.png" alt="Товары для дома" />
                            <figcaption>Товары для дома</figcaption>
                        </figure>
                    </Link>
                    <Link className={styles.categories__item} href="#">
                        <figure>
                            <Image width={250} height={250} loading="lazy" src="/images/product-category/products-for-children-and-mothers.png" alt="Товары для детей и мам" />
                            <figcaption>Товары для детей&nbsp;и&nbsp;мам</figcaption>
                        </figure>
                    </Link>
                    <Link className={styles.categories__item} href="#">
                        <figure>
                            <Image width={250} height={250} loading="lazy" src="/images/product-category/dishes.png" alt="Посуда" />
                            <figcaption>Посуда</figcaption>
                        </figure>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ProductCategories;