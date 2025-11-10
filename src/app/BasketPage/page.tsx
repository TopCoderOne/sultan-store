'use client';
import styles from './BasketPage.module.scss';
import { ReactElement } from 'react';
import Image from 'next/image';
import DeleteIcon from '../../../public/icons/fluent_delete-16-filled.svg';
import BottleIcon from '../../../public/icons/bottle.svg';
import BoxIcon from '../../../public/icons/box.svg';
import Im from '/public/images/image-21.png';
import { Breadсrumbs } from '@/components/Breadсrumbs/Breadсrumbs';
import { useMediaQuery } from 'react-responsive';
import { MobileBackButton } from '../../components/MobileBackButton/MobileBackButton';
const breadcrumbs = [
    {
        title: 'Главная',
        href: '/'
    },
    {
        title: 'Корзина',
        href: '/BasketPage',
    },
];

function unitCheck(item: string): ReactElement {
    const unit = item;
    return unit === 'мл' ? <BottleIcon /> : <BoxIcon />;
}

const BasketPage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <div className={styles.basketPage}>
            <div className={`${styles.basketPage__wrapper} container`}>
                {isMobile
                    ? <MobileBackButton href="/" title="Назад" />
                    : <Breadсrumbs items={breadcrumbs} />
                }
                <h1>Корзина</h1>
                <ul className={styles.basket__list}>
                    <li className={styles.card}>
                        <Image width={281} height={191} className={styles.card__img} src={Im} alt="" />
                        <div className={styles.card__info}>
                            <span>450 мл</span>
                            <h2>AOS средство для мытья посуды Crystal</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam interdum ut justo, vestibulum sagittis iaculis iaculis.
                                Quis mattis vulputate feugiat massa vestibulum duis.
                            </p>
                        </div>
                        <div className={styles.card__actions}>
                            <div className={styles.line49}></div>
                            <div className={styles.card__counter}>
                                <span className={styles.decrementButton}>-</span>
                                <span className={styles.counterDisplay}>1</span>
                                <span className={styles.incrementButton}>+</span>
                            </div>
                            <div className={styles.line49}></div>
                            <span className={styles.card__sum}>48,76 ₸</span>
                            <div className={styles.line49}></div>
                            <button
                                type="button"
                                title="Remove"
                                className={`${styles.card__button} iconBackground`}
                            >
                                <DeleteIcon />
                            </button>
                        </div>
                    </li>
                </ul>
                <div className={styles.basketPage__footer}>
                    <button type="button">Оформить заказ</button>
                    <strong>1 348,76 ₸</strong>
                </div>
            </div>
        </div>
    );
};

export default BasketPage;