import styles from './Card.module.scss';
// import Image from 'next/image';
import Bottle from "../../../public/icons/bottle.svg";
import BasketWhite from "../../../public/icons/basket-white.svg";

interface CardProps {
    item: IProducts;
}

const Card = ({ item }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={`${styles.card__label} ${item.popular ? styles.show : ''}`}>
                ПОПУЛЯРНОЕ
            </div>
            <div className={styles.card__img}>
                {/* <Image fill src={item.image} alt={item.name} loading="lazy" /> */}
                <img width={202} height={194} src={item.image} alt={item.name} loading="lazy" />
            </div>
            <p className={styles.card__unit}>
                <Bottle />{item.quantity}&nbsp;{item.unit}
            </p>
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
                    <span>В КОРЗИНУ</span><BasketWhite />
                </button>
            </div>
        </div>
    );
}

export default Card;