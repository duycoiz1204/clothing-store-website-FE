import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss';
import {Column, Grid, Row} from '~/components/Grid';
import CartProductItem from '~/components/CartProductItem';
const cx = classNames.bind(styles);

function Cart() {
    
    const [productsDisplay, setProductDisplay] = useState(5);

    function handleLoadMoreClick() {
        setProductDisplay(productsDisplay + 5);
    }

    return(
        <div className={cx('container')}>
            <h3 className={cx('title')}>Cart</h3>
            <div className={cx('main-content')}>
                <Grid>
                    <Row className="cart-product">
                            {products.map(
                                (product, index) =>
                                    index < productsDisplay && (
                                        <Column 
                                            key={index}
                                            className={cx('column','l-12')}
                                        >
                                            {/* <Link to={`/products/${product.id}`}> */}
                                            <Link>
                                                <CartProductItem product={product} />
                                            </Link>
                                        </Column>
                                    ),
                            )}
                        
                    </Row>
                </Grid>
            </div>
        </div>
    );
}
export default Cart;

const products= [
    {
        id: 1,
        name : 'product 1',
        price: 10,
    },
    {
        id: 2,
        name : 'product 2',
        price: 10,
    },
    {
        id: 3,
        name : 'product 3',
        price: 10,
    },
    {
        id: 4,
        name : 'product 4',
        price: 10,
    },
    {
        id: 5,
        name : 'product 5',
        price: 10,
    },
];

