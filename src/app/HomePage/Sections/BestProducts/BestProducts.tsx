import { Splide, SplideSlide, SplideTrack } from "../../../../../node_modules/@splidejs/react-splide";
import BrandLogoCard from '../../../../components/BrandLogoCard/BrandLogoCard';
import "./BestProducts.scss";

const brandLogos: IBrandLogo[] = [
    { width: 82, height: 68, src: "/images/brand-logo/AirWick-logo.png", alt: "AirWick-logo" },
    { width: 82, height: 66, src: "/images/brand-logo/MasterFresh-logo.png", alt: "MasterFresh-logo" },
    { width: 157, height: 46, src: "/images/brand-logo/Siberian-logo.png", alt: "Siberian-logo" },
    { width: 82, height: 69, src: "/images/brand-logo/CottonClub-logo.png", alt: "CottonClub-logo" },
    { width: 124, height: 65, src: "/images/brand-logo/CamayFrance-logo.png", alt: "CamayFrance-logo" },
    { width: 140, height: 50, src: "/images/brand-logo/Johnsons-logo.png", alt: "Johnsons-logo" },
    { width: 140, height: 50, src: "/images/brand-logo/Colgate-logo.png", alt: "Colgate-logo" },
    { width: 102, height: 65, src: "/images/brand-logo/Nivea-logo.png", alt: "Nivea-logo" },
    { width: 63, height: 63, src: "/images/brand-logo/NC-logo.png", alt: "NC-logo" },
    { width: 63, height: 63, src: "/images/brand-logo/NEFIS-logo.png", alt: "NEFIS-logo" },
];

const BestProducts = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title"><span>Лучшие</span> товары</h2>
                    <p className="section__text">От&nbsp;ведущих мировых брендов</p>
                </div>
                <Splide
                    className="carousel"
                    hasTrack={false}
                    options={{
                        rewind: true,
                        width: 1440,
                        fixedWidth: 1440,
                        interval: 10000,
                        pagination: true,
                        speed: 9000,
                        autoplay: true,
                        gap: 10,
                    }}
                >
                    <SplideTrack>
                        <SplideSlide>
                            {
                                brandLogos.map(logo => (
                                    <BrandLogoCard
                                        key={logo.alt}
                                        width={logo.width}
                                        height={logo.height}
                                        src={logo.src}
                                        alt={logo.alt} />
                                ))
                            }
                        </SplideSlide>
                        <SplideSlide>
                            {
                                brandLogos.map(logo => (
                                    <BrandLogoCard
                                        key={logo.alt}
                                        width={logo.width}
                                        height={logo.height}
                                        src={logo.src}
                                        alt={logo.alt} />
                                ))
                            }
                        </SplideSlide>
                        <SplideSlide>
                            {
                                brandLogos.map(logo => (
                                    <BrandLogoCard
                                        key={logo.alt}
                                        width={logo.width}
                                        height={logo.height}
                                        src={logo.src}
                                        alt={logo.alt} />
                                ))
                            }
                        </SplideSlide>
                        <SplideSlide>
                            {
                                brandLogos.map(logo => (
                                    <BrandLogoCard
                                        key={logo.alt}
                                        width={logo.width}
                                        height={logo.height}
                                        src={logo.src}
                                        alt={logo.alt} />
                                ))
                            }
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>
        </section>
    );
}

export default BestProducts;