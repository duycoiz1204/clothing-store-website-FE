import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Grid, Row, Column } from '~/components/Grid';
import Button from '~/components/Button';

import styles from './ProductsList.module.scss';
import image from '~/assets/images/clothes1.png';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProductsList() {
    return (
        <div className={cx('container')}>
            <Grid>
                <Row className="gutter">
                    {products.map((product, index) => (
                        <Column key={index} className={cx('column', 'l-4')}>
                            <ProductItem product={product} />
                        </Column>
                    ))}
                </Row>
            </Grid>
            <Button
                className={cx('load-btn')}
                primary
                small
                leftIcon={<FontAwesomeIcon icon={faSpinner} />}
            >
                Load more
            </Button>
        </div>
    );
}

export default ProductsList;

function ProductItem({ product }) {
    return (
        <div className={cx('item')}>
            <div className={cx('item-header')}>
                <img className={cx('item-image')} src={image} alt="" />
            </div>
            <div className={cx('item-content')}>
                <div className={cx('content-top')}>
                    <span className={cx('product-name')}>{product.name}</span>
                    <span className={cx('product-status')}>{product.status}</span>
                </div>
                <div className={cx('content-bottom')}>
                    <span className={cx('initial-price')}>${product.initialPrice}</span>
                    <span className={cx('current-price')}>${product.currentPrice}</span>
                </div>
            </div>
        </div>
    );
}

const products = [
    {
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        name: 'Product 2',
        status: 'Elimited Edition',
        initialPrice: 20,
        currentPrice: 30,
    },
    {
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
    {
        name: 'Product 1',
        status: 'New Arrival',
        initialPrice: 15,
        currentPrice: 10,
    },
];
