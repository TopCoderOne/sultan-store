import styles from './Card.module.scss';
import Image from 'next/image';
import BasketWhite from "../../../public/icons/basket-white.svg";

interface CardProps {
    item: IProducts;
}

const Card = ({ item }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__label}>
                ПОПУЛЯРНОЕ
            </div>
            <div className={styles.card__img}>
                <img src={item.image} alt={item.name} loading="lazy" />
            </div>
            {/* <Image className={styles.card__img} src={item.image} alt={item.name} /> */}
            <p className={styles.card__header}>
                <span>{item.brand}</span> {item.name}
            </p>
            <div className={styles.card__content}>
                <p>Штрихкод: <span>{item.barcode}</span></p>
                <p>Производитель: <span>{item.manufacturer}</span></p>
                <p>Бренд: <span>{item.brand}</span></p>
            </div>
            <div className={styles.card__footer}>
                <p>{item.price} {item.currency}</p>
                <button className={styles.card__button}>
                    <span>В КОРЗИНУ</span>
                    <BasketWhite />
                </button>
            </div>
        </div>
    );
}

export default Card;