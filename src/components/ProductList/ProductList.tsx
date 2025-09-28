"use client";
import { useEffect, useState } from 'react';
import styles from './productList.module.scss';
import Card from '../Card/Card';
import data from "../../../public/data.json";

const ProductList = () => {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('../../../public/data.json');
    //             const data = await response.json();
    //             setData(JSON.parse(data));
    //         } catch {

    //         }
    //     }

    //     fetchData();

    //     fetch('../../../public/data.json')
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status}`);
    //             }
    //             return response.json();
    //         }).then((data) => {
    //             const list = data?.productsList ?? [];
    //             setData(list);
    //         })
    //         .catch((err) => {
    //             console.error('Ошибка загрузки данных', err);
    //         });
    // }, []);

    return (
        <section className={styles.productsList}>
            {
                data.productsList.map((item, index) => (
                    <Card item={item} key={index} />
                ))
            }
        </section>
    );
};

export default ProductList;