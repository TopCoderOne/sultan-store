'use client'

import { useEffect, useState } from 'react';
import Card from '@/components/Card/Card';
import styles from './PromotionalProducts.module.scss';
import global from '@/styles/global.module.scss';

const PromotionalProducts = () => {
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('@/data.json');
            const data = await response.json();
            setData(data);
        }

        fetchData();
    });
        
    const [data, setData] = useState<IProducts[]>([]);

    return(
            <section className={global.section}>
                <div className={global.container}>
                    <div className={global.section__header}>
                        <h2 className={global.section__title}><span>Акционные</span> товары</h2>
                    </div>

                    <div className={styles["promotional-products"]}>
                        {
                            data.map((item, index) => (
                                <Card item={item} key={index} />
                            ))
                        }
                    </div>
                </div>
            </section>
    );
}

export default PromotionalProducts;

// {image, name, barcode, manufacturer, brand, price, currency}