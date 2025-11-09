import Input from "../Input/Input";
import styles from "./FilterPanel.module.scss";
import database from "../../../public/database.json"
import Image from 'next/image';
import AirWick from '../../../public/images/brand-logo/AirWick-logo.png';
import CamayFrance from '../../../public/images/brand-logo/CamayFrance-logo.png';
import CottonClub from '../../../public/images/brand-logo/CottonClub-logo.png';
import Colgate from '../../../public/images/brand-logo/Colgate-logo.png';
import Johnsons from '../../../public/images/brand-logo/Johnsons-logo.png';
import MasterFresh from '../../../public/images/brand-logo/MasterFresh-logo.png';
import NC from '../../../public/images/brand-logo/NC-logo.png';
import NEFIS from '../../../public/images/brand-logo/NEFIS-logo.png';
import Nivea from '../../../public/images/brand-logo/Nivea-logo.png';
import Siberian from '../../../public/images/brand-logo/Siberian-logo.png';
import SearchIcon from "../../../public/icons/magnifying-glass.svg";
import TrashCanIcon from "/public/icons/fluent_delete-16-filled.svg";

const FilterPanel = () => {
    return (
        <aside className={styles.filterPanel}>
            <h3 className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
            <p className={styles.price}>Цена&nbsp;<span>₸</span></p>
            <div className={styles.counter}>
                <input type="number" name="input-counter-from" title="От" />
                <span>-</span>
                <input type="number" name="input-counter-to" title="До" value={1000} />
            </div>
            <div className={styles.manufacturer_search_block}>
                <label className={styles.inputLabel} htmlFor="manufacturer-search">Производитель</label>
                <Input
                    id="manufacturer-search"
                    type="search"
                    name="manufacturer-search"
                    placeholder="Поиск..."
                    className="input-bg-light-gray"
                    buttonType="submit"
                    buttonTitle="Поиск"
                    buttonIcon={SearchIcon}
                />
                <ul className={styles.list}>
                    {
                        database.manufacturers.map((item, index) => {
                            return (
                                <li key={index}>
                                    <input type="checkbox" title="Выбрать" /> <span>{item}</span>&nbsp;<span>(56)</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div className={styles.brand_search_block}>
                <label className={styles.inputLabel} htmlFor="brand-search">Бренд</label>
                <Input
                    id="brand-search"
                    type="search"
                    name="brand-search"
                    placeholder="Поиск..."
                    className="main-input-style input-bg-light-gray"
                    buttonType="submit"
                    buttonTitle="Поиск"
                    buttonIcon={SearchIcon}
                />
                <ul className={styles.list}>
                    {
                        database.brands.map((item, index) => {
                            return (
                                <li key={index}>
                                    <input type="checkbox" title="Выбрать" />&nbsp;<span>{item}</span>&nbsp;<span>(56)</span>
                                </li>
                            );
                        })
                    }
                </ul>
                <div className={styles.buttonsWrapper}>
                    <button type="button">Показать</button>
                    <button type="button" title="Сбросить фильтр"><TrashCanIcon /></button>
                </div>
            </div>
            {
                database.productType.map((item, index) => {
                    return (
                        <>
                            <h3 className={styles.title} key={index}>{item.title}</h3>
                            <ul className={styles.list} key={index}>
                                {item.options.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </>
                    );
                })
            }
            <h3 className={styles.title}>Бренды</h3>
            <ul className={styles.logosList}>
                <li><Image src={AirWick} alt="AirWick" /></li>
                <li><Image src={MasterFresh} alt="MasterFresh" /></li>
                <li><Image src={Siberian} alt="Siberian" /></li>
                <li><Image src={CottonClub} alt="CottonClub" /></li>
                <li><Image src={CamayFrance} alt="CamayFrance" /></li>
                <li><Image src={Johnsons} alt="Johnsons" /></li>
                <li><Image width={140} height={50} src={Colgate} alt="Colgate" /></li>
                <li><Image src={Nivea} alt="Nivea" /></li>
                <li><Image src={NC} alt="NC" /></li>
                <li><Image src={NEFIS} alt="NEFIS" /></li>
            </ul>
        </aside>
    );
}

export default FilterPanel;