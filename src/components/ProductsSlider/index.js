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

function ProductsSlider({ title }) {
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

const products = [
    {
        id: 1,
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 2,
        name: 'Product 2',
        status: 'Elimited Edition',
        initialPrice: 20,
        currentPrice: 30,
    },
    {
        id: 3,
        name: 'Product 3',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 4,
        name: 'Product 4',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 5,
        name: 'Product 5',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 6,
        name: 'Product 6',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 7,
        name: 'Product 7',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 8,
        name: 'Product 8',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
];
