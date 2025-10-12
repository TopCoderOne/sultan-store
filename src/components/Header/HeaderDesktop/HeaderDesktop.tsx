'use client';
import Cubes from "../../../../public/icons/cubes.svg";
import BasketItem from '../../BasketItem/BasketItem';
import styles from './HeaderDesktop.module.scss';
import global from "@/styles/global.module.scss";
import Menu from '../../Menu/Menu';
import PriceListButton from '../../PriceListButton/PriceListButton';
import Input from '@/components/Input/Input';
// import MagnifyingGlass from "../../../../public/icons/magnifying-glass.svg"
import { useRouter } from "next/navigation";
import Link from "next/link";

const HeaderDesktop = () => {
    const router = useRouter();

    const goToBasketPage = () => {
        router.push('/BasketPage');
    };

    return (
        <>
            <div className={global.container}>
                <Menu />
            </div>
            <div className={styles.main}>
                <div className={global.container}>
                    <div className={styles.content}>
                        <Link href="/">
                            <img className={styles.logo} src="/images/header/sultan-logo.png" alt="Султан" />
                        </Link>

                        <button
                            className={`${styles["catalog-button"]} ${global["main-button-style"]}`}
                            type="button">
                            Каталог
                            <Cubes />
                        </button>

                        <Input
                            type="email"
                            name="search"
                            placeholder="Поиск..."
                            buttonType="submit"
                            buttonTitle="Отправить" />

                        <div className={styles.operator}>
                            <p>
                                +7 (777) 490-00-91
                                <span>время работы: 9:00-20:00</span>
                                <a href="tel:+77774900091">Заказать звонок</a>
                            </p>
                            <div className={styles.operator__image}>
                                <img src="/images/header/operator.png" alt="Онлайн консультант" />
                                <div className={styles.operator__status}>
                                    <div className={styles["operator__status-online"]}></div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.line49}></div>

                        <PriceListButton className={`${styles["price-list-button"]} ${global["main-button-style"]}`} />

                        <div className={styles.line49}></div>

                        <div onClick={goToBasketPage}><BasketItem /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderDesktop;