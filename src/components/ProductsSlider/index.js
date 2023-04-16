import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { Row, Column } from '~/components/Grid';
import ProductItem from '~/components/ProductItem';

import styles from './ProductsSlider.module.scss';

const cx = classNames.bind(styles);

function ProductsSlider({ title, products }) {
    const [selected, setSelected] = useState(0);
    const sliderRef = useRef();
    
    function hanldePreviousButton() {
        const slider = sliderRef.current;

        if (selected > 0) {
            setSelected(selected - 4);
            slider.scrollTo({
                top: slider.scrollTop,
                left: slider.scrollLeft - slider.clientWidth,
                behavior: 'smooth',
            });
        } else {
            setSelected(products.length - 1 - ((products.length - 1) % 4));
            slider.scrollTo({
                top: slider.scrollTop,
                left: slider.scrollWidth,
                behavior: 'smooth',
            });
        }
    }

    function handleNextButton() {
        const slider = sliderRef.current;

        if (selected < products.length - 1 - ((products.length - 1) % 4)) {
            setSelected(selected + 4);
            slider.scrollTo({
                top: slider.scrollTop,
                left: slider.scrollLeft + slider.clientWidth,
                behavior: 'smooth',
            });
        } else {
            setSelected(0);
            slider.scrollTo({
                top: slider.scrollTop,
                left: 0,
                behavior: 'smooth',
            });
        }
    }

    return (
        <div className={cx('container')}>
            <h4 className={cx('title')}>{title}</h4>
            <Row innerRef={sliderRef} className={cx('slider', 'gutter')}>
                {products.map((product, index) => (
                    <Column key={index} className={cx('slide', 'l-3')}>
                        <Link to={`/products/${product.id}`}>
                            <ProductItem product={product} />
                        </Link>
                    </Column>
                ))}
            </Row>
            <div className={cx('controls')}>
                <div
                    className={cx('button', 'prev')}
                    onClick={hanldePreviousButton}
                >
                    <FontAwesomeIcon
                        className={cx('icon')}
                        icon={faChevronLeft}
                    />
                </div>
                <div
                    className={cx('button', 'next')}
                    onClick={handleNextButton}
                >
                    <FontAwesomeIcon
                        className={cx('icon')}
                        icon={faChevronRight}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductsSlider;