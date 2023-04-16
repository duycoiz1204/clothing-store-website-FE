import { useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';

import { Column, Grid, Row } from '~/components/Grid';
import CartProductItem from '~/components/CartProductItem';

import { CustomerContext } from '~/contexts/Customer/CustomerContext';

import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    const { cart } = useContext(CustomerContext);

    const cartDetails = cart?.cartDetails || [];

    const cartContent = cartDetails.map((cartDetail, index) => (
        <Column key={index} className={cx('column', 'l-12')}>
            <CartProductItem cartDetail={cartDetail} />
        </Column>
    ));

    return (
        <div className={cx('container')}>
            <h3 className={cx('title')}>Cart</h3>
            <div className={cx('main-content')}>
                <Grid>
                    <Row className="cart-product">
                        {cartContent.length ? cartContent : 'Empty content'}
                    </Row>
                </Grid>
            </div>
        </div>
    );
}
export default Cart;
