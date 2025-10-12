import { Splide, SplideSlide, SplideTrack } from '../../../../../node_modules/@splidejs/react-splide';
import styles from './SliderContent.module.scss';
import './SliderSplideStyles.scss';
import '../../../../../node_modules/@splidejs/react-splide/dist/css/splide-core.min.css';
import '../../../../../node_modules/@splidejs/react-splide/dist/css/themes/splide-default.min.css';
import Arrow from '../../../../../public/icons/yellow-arrow.svg';

const Slider = () => {
    return (
        <div className="section">
            <div className="container">
                <Splide
                    className="slider"
                    hasTrack={false}
                    aria-label="Акции"
                    options={{
                        rewind: true,
                        width: '100%',
                        gap: '1rem',
                    }}>
                    <SplideTrack>
                        <SplideSlide>
                            <div className={styles.page}>
                                <p className="validity-period">*Акция действует до 04/09/22</p>
                                <h3 className={styles.title}>Название Акции 1</h3>
                                <p className={styles.text}>Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                                <button className={`${styles.button} ${"button"}`} type="button">ПРИНЯТЬ УЧАСТИЕ</button>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={styles.page}>
                                <p className="validity-period">*Акция действует до 04/09/22</p>
                                <h3 className={styles.title}>Название Акции 1</h3>
                                <p className={styles.text}>Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                                <button className={`${styles.button} ${"button"}`} type="button">ПРИНЯТЬ УЧАСТИЕ</button>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={styles.page}>
                                <p className="validity-period">*Акция действует до 04/09/22</p>
                                <h3 className={styles.title}>Название Акции 1</h3>
                                <p className={styles.text}>Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                                <button className={`${styles.button} ${"button"}`} type="button">ПРИНЯТЬ УЧАСТИЕ</button>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className={styles.page}>
                                <p className="validity-period">*Акция действует до 04/09/22</p>
                                <h3 className={styles.title}>Название Акции 1</h3>
                                <p className={styles.text}>Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк</p>
                                <button className={`${styles.button} ${"button"}`} type="button">ПРИНЯТЬ УЧАСТИЕ</button>
                            </div>
                        </SplideSlide>
                    </SplideTrack>

                    <div className={`splide__arrows`}>
                        <button className={`splide__arrow splide__arrow--prev`} type="button" title="Предыдущий"><Arrow /></button>
                        <button className={`splide__arrow splide__arrow--next`} type="button" title="Следующий"><Arrow /></button>
                    </div>

                    <ul className="splide__pagination splide__pagination--ltr" role="tablist" aria-label="Select a slide to show">
                        <li role="presentation">
                            <button className="splide__pagination__page is-active" type="button" role="tab" aria-controls="splide01-slide01" aria-label="Go to slide 1" aria-selected="true"></button>
                        </li>
                        <li role="presentation">
                            <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide01-slide02" aria-label="Go to slide 2" tabIndex={-1}></button>
                        </li>
                        <li role="presentation">
                            <button className="splide__pagination__page" type="button" role="tab" aria-controls="splide01-slide03" aria-label="Go to slide 3" tabIndex={-1}></button>
                        </li>
                    </ul>
                </Splide>
            </div>
        </div>
    );
}

export default Slider;