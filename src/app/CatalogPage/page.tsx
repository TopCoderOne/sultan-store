'use client';
import styles from './СatalogPage.module.scss';
import database from '../../../public/database.json';
import FilterPanel from '@/components/FilterPanel/FilterPanel';
import ProductList from '@/components/ProductList/ProductList';
import { Breadсrumbs } from '@/components/Breadсrumbs/Breadсrumbs';
import { useMediaQuery } from 'react-responsive';
import { MobileBackButton } from '@/components/MobileBackButton/MobileBackButton';

const breadcrumbs = [
    {
        title: 'Главная',
        href: '/'
    },
    {
        title: 'Каталог',
        href: '/CatalogPage',
    },
];

const CatalogPage = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <section className={styles.catalog}>
            <div className="container">
                {isMobile
                    ? <MobileBackButton href={'/'} title="Назад" />
                    : <Breadсrumbs items={breadcrumbs} />
                }
                <div className={styles.catalog__header}>
                    <h1 className={styles.catalog__title}>Косметика и гигиена</h1>
                    <div>
                        <ul className={styles.subCategoryList}>
                            {database.productType.map((item, index) => {
                                return (
                                    <li key={index}>{item.title}</li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className={styles.catalog__body}>
                    <FilterPanel />
                    <div>
                        <ProductList />
                        <p className={styles.catalog__bodyText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CatalogPage;