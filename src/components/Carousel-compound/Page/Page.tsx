import { FC, ReactNode, useContext } from 'react';
import { CarouselContext } from '../carousel-context';
import styles from './Page.module.scss';

const Page: FC<{children: ReactNode}> = ({children}) => {
    const { width } = useContext(CarouselContext);
    return (
        <section
            className={styles["page-main-container"]}
            style={{
                minWidth: `${width}px`,
                maxWidth: `${width}px`,
            }}
        >
            {children}
        </section>
    );
};

export default Page;