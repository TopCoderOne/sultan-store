'use client'
import Card from '@/components/Card/Card';
import styles from './PromotionalProducts.module.scss';
import database from "../../../../../public/database.json";

const PromotionalProducts = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title"><span>Акционные</span> товары</h2>
                </div>

                <div className={styles.promotional}>
                    {
                        database.products
                            .slice(0, 8)
                            .filter(item => item.popular)
                            .map((item, index) => (
                                <Card item={item} key={index} />
                            ))
                    }
                </div>
            </div>
        </section>
    );
}

export default PromotionalProducts;