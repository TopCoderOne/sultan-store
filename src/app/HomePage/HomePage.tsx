'use client';
import MainDestop from './Sections/Main/Desktop/MainDesktop';
import MainMobile from './Sections/Main/Mobile/MainMobile';
import ProductCategories from './Sections/ProductCategories/ProductCategories';
import PromotionalProducts from './Sections/PromotionalProducts/PromotionalProducts';
import { useMediaQuery } from 'react-responsive';
import Contacts from './Sections/Contacts/Contacts';
import BestProducts from './Sections/BestProducts/BestProducts';
import SliderSection from './Sections/Slider/Slider';


const HomePage = () => {
    const isMobile = useMediaQuery({query: '(max-width: 1024px)'});

    return (
        <>
            {isMobile ? <MainMobile /> : <MainDestop />}
            <PromotionalProducts />
            <ProductCategories />
            <SliderSection />
            <BestProducts />
            <Contacts />
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