import styles from "./BasketItem.module.scss";
import BasketBlue from "../../../public/icons/basket-blue.svg";

const BasketItem = () => {
    return (
        <div className={styles.basket}>
            <div className={styles.basket_counter_block}>
                <BasketBlue />
                <div className={styles.basket_counter}>3</div>
            </div>
            <div className={styles.basket_info_block}>
                <p className={styles.basket_text}>Корзина</p>
                <p className={styles.basket_total}>12 478 ₸ </p>
            </div>
        </div>
    );
};

export default BasketItem;