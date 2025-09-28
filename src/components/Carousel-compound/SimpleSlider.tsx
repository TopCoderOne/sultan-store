'use client'

import { Children, cloneElement, isValidElement, ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import styles from './SimpleSlider.module.scss';
import Page from './Page/Page';
import { CarouselContext } from './carousel-context';
import LeftArrow from '../../../public/icons/chevron-left.svg';
import RightArrow from '../../../public/icons/chevron-right.svg';

const SimpleSlider = ({ children }: { children: ReactNode }) => {
    const [pages, setPages] = useState<ReactElement[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [width, setWidth] = useState<number>(1432);

    const windowElRef = useRef();

    useEffect(() => {
        const resizeHandler = () => {
            const _width = windowElRef.current?.offsetWidth;
            setWidth(_width);
            setOffset(0);
        };

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.addEventListener('resize', resizeHandler);
        };
    }, []);

    const handlePrevButton = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + width;

            return Math.min(newOffset, 0);
        })
    };

    const handleNextButton = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - width;
            const maxOffset = -(width * (pages.length - 1));

            return Math.max(newOffset, maxOffset);
        })
    };

    useEffect(() => {
        if (children) {
            const mappedChildren = Children.map(children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement, {
                        style: {
                            height: '100%',
                            minWidth: `${width}px`,
                            maxWidth: `${width}px`
                        }
                    });
                } else {
                    return null;
                }
            }) ?? [];

            setPages(mappedChildren);
        } else {
            setPages([]);
        }
    }, [children])

    return (
        <CarouselContext.Provider value={{ width: width }}>
            <div className={styles["main-container"]}>
                <button
                    className={`${styles.switch} ${styles["switch-left"]}`}
                    name="prev-button"
                    title="Предыдущий слайдер"
                    type="button"
                    onClick={handlePrevButton}>
                    <LeftArrow />
                </button>

                <div className={styles["window"]} ref={windowElRef}>
                    <div
                        className={styles["all-pages-container"]}
                        style={{
                            transform: `translateX(${offset}px)`
                        }}>
                        {pages}
                    </div>
                </div>

                <button
                    className={`${styles.switch} ${styles["switch-right"]}`}
                    name="next-slider"
                    title="Следующий слайдер"
                    type="button"
                    onClick={handleNextButton}>
                    <RightArrow />
                </button>
            </div>
        </CarouselContext.Provider>
    );
};

export default SimpleSlider;

SimpleSlider.Page = Page;