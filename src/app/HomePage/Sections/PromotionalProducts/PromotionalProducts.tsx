'use client'
import Card from '@/components/Card/Card';
import styles from './PromotionalProducts.module.scss';
import './SliderSplideStyles.scss';
import database from '../../../../../public/database.json';
import { Splide, SplideSlide, SplideTrack } from '../../../../../node_modules/@splidejs/react-splide';

const PromotionalProducts = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title"><span>Акционные</span> товары</h2>
                </div>

                <div>
                    <Splide
                        className="promotional-products-slider"
                        hasTrack={false}
                        options={{
                            mediaQuery: 'min',
                            breakpoints: {
                                1024: {
                                    destroy: true,
                                },
                            },
                            autoWidth: true,
                            perMove: 1,
                            perPage: 3,
                            fixedWidth: 326,
                            arrows: false,
                            rewind: true,
                            width: '100%',
                            gap: 20,
                        }}
                    >
                        {/* <SplideTrack>
                            {
                                database.products
                                    .slice(0, 8)
                                    .filter(item => item.popular)
                                    .map((item, index) => (
                                        <SplideSlide key={index}>
                                            <Card item={item} />
                                        </SplideSlide>
                                    ))
                            }
                        </SplideTrack> */}

                        <SplideTrack>
                            <SplideSlide>
                                {
                                    database.products
                                        .slice(0, 8)
                                        .filter(item => item.popular)
                                        .map((item, index) => (
                                            <Card key={index} item={item} />
                                        ))
                                }
                            </SplideSlide>
                        </SplideTrack>
                    </Splide>
                </div>
            </div>
        </section>
    );
}

export default PromotionalProducts;