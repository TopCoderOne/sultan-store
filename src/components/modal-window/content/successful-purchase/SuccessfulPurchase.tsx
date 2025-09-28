import styles from "./successfulPurchase.module.scss";
import global from "../../../../styles/global.module.scss";
import DoubleCheckIcon from "../../../../../public/icons/double-check.svg";

const SuccessfulPurchase = () => {
    return (
        <div className={styles.successfulPurchase}>
            <div className={global.iconBackground}><DoubleCheckIcon /></div>
            <h2>Спасибо за заказ</h2>
            <p>Наш менеджер свяжется с вами в ближайшее время</p>
        </div>
    );
};

export default SuccessfulPurchase;