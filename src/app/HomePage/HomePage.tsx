"use client"
import MainDestop from './Sections/Main/Desktop/MainDesktop';
import MainMobile from './Sections/Main/Mobile/MainMobile';
// import CarouselCompound from '../../components/Carousel-compound/SimpleSlider'
import ProductCategories from './Sections/ProductCategories/ProductCategories';
import PromotionalProducts from './Sections/PromotionalProducts/PromotionalProducts';
import { useMediaQuery } from 'react-responsive';
// import styles from '../../components/Carousel-compound/SimpleSlider.module.scss';
import Location from './Sections/Location/Location';

const HomePage = () => {
    const matches = useMediaQuery({query: '(min-width: 768px)'});

    return (
        <>
            {matches ? <MainDestop /> : <MainMobile />}
            <PromotionalProducts />
{/* 
            <CarouselCompound>
                <CarouselCompound.Page>
                    <div className={styles.page}>
                        <p className="validity-period">*Акция действует до 04/09/22</p>
                        <h3 className={styles.title}>Название Акции 1</h3>
                        <p className={styles.text}>Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                        <button className={`${styles.button} ${"button"}`} type="button">ПРИНЯТЬ УЧАСТИЕ</button>
                    </div>
                </CarouselCompound.Page>

                <CarouselCompound.Page>
                    <div className={styles.page}>
                        <p >*Акция действует до 04/09/22</p>
                        <h3 className={styles.title}>Название Акции 2</h3>
                        <p className={styles.text}>Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                        <button className={`${styles.button} ${"button"}`} type="button">ПРИНЯТЬ УЧАСТИЕ</button>
                    </div>
                </CarouselCompound.Page>

                <CarouselCompound.Page>
                    <div className={styles.page}>
                        <p className="slider__validity">*Акция действует до 04/09/22</p>
                        <h3 className={styles.title}>Название Акции 3</h3>
                        <p className={styles.text}>Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                        <button className={`${styles.button} ${"button"}`} type="button">ПРИНЯТЬ УЧАСТИЕ</button>
                    </div>
                </CarouselCompound.Page>
            </CarouselCompound> */}

            <ProductCategories />
            <Location />
        </>
    );
};

export default HomePage;














// import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
// import HomeDestop from "./Sections/Home/Desktop/HomeDesktop";
// import HomeMobile from "./Sections/Home/Mobile/HomeMobile";
// import ProductCategories from "./Sections/ProductCategories/ProductCategories";
// import PromotionalProducts from "./Sections/PromotionalProducts/PromotionalProducts";
// import { useMediaQuery } from "usehooks-ts";
// import SliderData from '../../components/SimpleSlider/data';
// import styles from '../../components/SimpleSlider/SimpleSlider.module.scss'

// const HomePage = () => {
//     const matches = useMediaQuery('(min-width: 768px)');

//     return (
//         <>
//             {matches ? <HomeDestop /> : <HomeMobile />}
//             <PromotionalProducts />
//             <SimpleSlider>
//                 {
//                     SliderData.map(data => (
//                         <div className={styles.page}>
//                             <p className={styles["validity-proud"]}>{data.validityPeriod}</p>
//                             <h3 className={styles.title}>{data.title}</h3>
//                             <p className={styles.text}>{data.text}</p>
//                             <button className={`${styles.button} ${"button"}`} type="button">{data.buttonText}</button>
//                         </div>
//                     ))
//                 }
//             </SimpleSlider>
            
//             <ProductCategories />
//         </>
//     );
// };

// export default HomePage;