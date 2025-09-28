import Input from "../Input/Input";
import styles from "./filterPanel.module.scss";
import AirWick from "../../../public/images/logos/AirWick-logo.png";
import CamayFrance from "../../../public/images/logos/CamayFrance-logo.png";
import CottonClub from "../../../public/images/logos/CottonClub-logo.png";
import Colgate from "../../../public/images/logos/Colgate-logo.png";
import Johnsons from "../../../public/images/logos/Johnsons-logo.png";
import MasterFresh from "../../../public/images/logos/MasterFresh-logo.png";
import NC from "../../../public/images/logos/NC-logo.png";
import NEFIS from "../../../public/images/logos/NEFIS-logo.png";
import Nivea from "../../../public/images/logos/Nivea-logo.png";
import Siberian from "../../../public/images/logos/Siberian-logo.png";
import Image from 'next/image';

const manufacturersList = [
    "Grifon",
    "Boyscout",
    "Paclan"
];

const brandsList = [
    "Nivea",
    "GRIFON",
    "Домашний сундук",
    "HELP"
];

const categoriesList = [
    {
        category: "Уход за телом",
        options: [
            "Эпиляция и депиляция",
            "Средства для ванны и душа",
            "Скрабы, пилинги и пр.",
            "Мочалки и губки для тела",
            "Кремы, лосьоны, масла",
            "Интимный уход",
            "Дезодоранты, антиперспиранты",
            "Гели для душа"
        ]
    },
    {
        category: "Уход за руками",
        options: [
            "Увлажнение и питание",
            "Средства для ногтей",
            "Мыло твердое",
            "Мыло жидкое",
            "Крем для рук",
            "Защита рук",
            "Жидкость для снятия лака"
        ]
    },
    {
        category: "Уход за ногами",
        options: [
            "Скрабы, пилинги",
            "Пилки, ролики",
            "Крем для ног",
            "Дезодоранты для ног"
        ]
    },
    {
        category: "Уход за лицом",
        options: [
            "Тональные средства",
            "Средства для снятия макияжа",
            "Средства для очищения",
            "Маски, скрабы, сыворотки",
            "Крем для лица",
            "Крем для век",
            "Жидкость для снятия макияжа",
            "Гигиеническая помада"
        ]
    },
    {
        category: "Уход за волосами",
        options: [
            "Шампуни",
            "Средства для укладки",
            "Средства для окрашивания волос",
            "Маски, сыворотки, масла",
            "Кондиционеры, бальзамы"
        ]
    },
    {
        category: "Средства для загара",
        options: [
            "Средства после загара"
        ]
    },
    {
        category: "Средства для бритья",
        options: [
            "Станки и кассеты",
            "После бритья",
            "Для бритья"
        ]
    },
    {
        category: "Подарочные наборы",
        options: [
            "Для мужчин",
            "Для женщин"
        ]
    },
];

const FilterPanel = () => {
    return (
        <aside className={styles.filter_panel}>
            <h3 className={styles.title}>ПОДБОР ПО ПАРАМЕТРАМ</h3>
            <p className={styles.price}>Цена&nbsp;<span>₸</span></p>
            <div className={styles.counter}>
                <input type="text" name="input-counter-from" title="От" value={0} />&nbsp;&nbsp;-&nbsp;&nbsp;
                <input type="text" name="input-counter-to" title="До" value={1000} />
            </div>
            <div className={styles.search_lock}>
                <label htmlFor="manufacturer_search">Производитель</label>
                <Input
                    id="manufacturer_search"
                    type="search"
                    name="manufacturer_search"
                    placeholder="Поиск..."
                    buttonType="submit"
                    buttonTitle="Поиск" />
            </div>
            <ul className={styles.list}>
                {
                    manufacturersList.map((item, index) =>
                        <li key={index}>
                            <input type="checkbox" title="Выбрать" />
                            &nbsp;<span>{item}</span>&nbsp;<span>(56)</span>
                        </li>)
                }
            </ul>
            <div className={styles.search_block}>
                <label htmlFor="brand_search">Бренд</label>
                <Input
                    id="brand_search"
                    type="search"
                    name="brand_search"
                    placeholder="Поиск..."
                    buttonType="submit"
                    buttonTitle="Поиск" />
            </div>
            <div className={styles.wrapper}>

            </div>
            <ul className={styles.list}>
                {
                    brandsList.map((item, index) =>
                        <li key={index}><span>{item}</span> <span>(56)</span></li>)
                }
            </ul>
            {
                categoriesList.map((item, index) => {
                    return (
                        <>
                            <h3 className={styles.title} key={index}>{item.category}</h3>
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