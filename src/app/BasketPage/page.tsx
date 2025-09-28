import styles from "./basketPage.module.scss";
import Image from "next/image";
import global from "../../styles/global.module.scss";
import DeleteIcon from "../../../public/icons/fluent_delete-16-filled.svg";
import Im from "../../../public/images/image-21.png";

const BasketPage = () => {
    return (
        <div className={styles.basketPage}>
            <div className={`${styles.basketPage_wrapper} ${global.container}`}>
                <h1>Корзина</h1>
                <label className={styles.checkbox_container}>
                    <input className={`${styles.checkbox} ${styles.active}`} type="checkbox" id="showDismissed" />
                    <span>Показать уволенных сотрудников</span>
                </label>

                <ul className={styles.basket_list}>
                    <li className={styles.card}>
                        <Image className={styles.card_img} src={Im} alt="" />
                        <div className={styles.card_info}>
                            <span>450 мл</span>
                            <h2>AOS средство для мытья посуды Crystal</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam interdum ut justo, vestibulum sagittis iaculis iaculis.
                                Quis mattis vulputate feugiat massa vestibulum duis.
                            </p>
                        </div>
                        <div className={styles.counter}>
                            <span className={styles.decrement_btn}>-</span>
                            <span className={styles.count}>1</span>
                            <span className={styles.increment_btn}>+</span>
                        </div>

                        <div></div>

                        <span className={styles.card_sum}>48,76 ₸</span>

                        <button
                            type="button"
                            title="Delete"
                            className={global.iconBackground}
                        >
                            <DeleteIcon />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BasketPage;