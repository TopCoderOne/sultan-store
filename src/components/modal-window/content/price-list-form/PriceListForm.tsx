import styles from "./priceListForm.module.scss";
import global from "../../../../styles/global.module.scss";
import WhatsApp from "../../../../../public/icons/whatsApp.svg";
import MailFilled from "../../../../../public/icons/fluent_mail-16-filled.svg";

const PriceListForm = () => {
    return (
        <div className={styles.priceListForm}>
            <h2>Куда прислать оптовый прайс-лист?</h2>
            <p>Получите оптовый прайс лист с лучшими ценами в Акмолинской области</p>

            <form className={styles.form}>
                <div className={styles.form__input}>
                    <label htmlFor="name">Имя*</label>
                    <input id="name" type="text" placeholder="Введите ваше имя" />
                </div>
                <div className={styles.form__input}>
                    <label htmlFor="email">E-mail*</label>
                    <input id="email" type="email" placeholder="Введите ваш E-mail" />
                </div>
                <div className={styles.form__input}>
                    <label htmlFor="phone">Телефон*</label>
                    <input id="phone" type="tel" placeholder="Введите ваш телефон" />
                </div>
                <div className={styles.form__input}>
                    <label htmlFor="organization-name">Название организации</label>
                    <input id="organization-name" type="text" placeholder="Введите название организации" />
                </div>
            </form>

            <p className={styles.p}>Куда отправить прайс-лист?</p>
            <div className={styles.form__submit}>
                <div className={styles.form__submitMethods}>
                    <a className={styles.whatsApp} href="">WhatsApp <WhatsApp /></a>
                    <a className={styles.email} href="">Email <MailFilled /></a>
                </div>
                <button className={global["main-button-style"]} type="submit" title="Отправить" aria-label="Отправить">Отправить</button>
            </div>
        </div>
    );
};

export default PriceListForm;