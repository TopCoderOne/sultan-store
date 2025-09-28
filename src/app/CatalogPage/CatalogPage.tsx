import FilterPanel from "@/components/FilterPanel/FilterPanel";
import styles from "./catalogPage.module.scss";
import ProductList from "@/components/ProductList/ProductList";
// import MagnifyingGlass from "../../../public/icons/magnifying-glass.svg";

const CatalogPage = () => {
    return (
        <section className={styles.catalog}>
            <div className="container">
                <div className={styles.catalog__header}>
                    <h1 className={styles.catalog__title}>Косметика и гигиена</h1>
                    <div>
                        <div></div>
                    </div>
                </div>
                <div className={styles.catalog__body}>
                    <FilterPanel />
                    <ProductList />
                </div>
            </div>
        </section>
    );
};

export default CatalogPage;