import styles from "./modalWindow.module.scss";
// import PriceListForm from "./content/price-list-form/PriceListForm";
// import SuccessfulPurchase from "./content/successful-purchase/SuccessfulPurchase";
import CloseOutlineIcon from "../../../public/icons/close-outline.svg";

const ModalWindow = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.modalWindow}>
                <button className={styles.closeBtn} type="button" title="Закрыть" aria-label="Закрыть">
                    <CloseOutlineIcon />
                </button>
                {
                    // true ? <SuccessfulPurchase /> : <PriceListForm />
                }
            </div>
        </div>
    );
};

export default ModalWindow;