import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { Grid, Row, Column } from '~/components/Grid';
import Button from '~/components/Button';
import ProductItem from '~/components/ProductItem';

import styles from './ProductsList.module.scss';

const cx = classNames.bind(styles);

function ProductsList() {
    const [productsDisplay, setProductDisplay] = useState(12);

    function handleLoadMoreClick() {
        setProductDisplay(productsDisplay + 12);
    }

    return (
        <div className={cx('container')}>
            <Grid>
                <Row className="gutter">
                    {products.map(
                        (product, index) =>
                            index < productsDisplay && (
                                <Column
                                    key={index}
                                    className={cx('column', 'l-4')}
                                >
                                    <Link to={`/products/${product.id}`}>
                                        <ProductItem product={product} />
                                    </Link>
                                </Column>
                            ),
                    )}
                </Row>
            </Grid>
            <Button
                className={cx('load-btn')}
                primary
                small
                leftIcon={<FontAwesomeIcon icon={faSpinner} />}
                onClick={handleLoadMoreClick}
            >
                Load more
            </Button>
        </div>
    );
}

export default ProductsList;

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
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
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
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 5,
        name: 'Product 2',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 6,
        name: 'Product 3',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 7,
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 8,
        name: 'Product 2',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 9,
        name: 'Product 3',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 10,
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 11,
        name: 'Product 2',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        id: 12,
        name: 'Product 3',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
];
