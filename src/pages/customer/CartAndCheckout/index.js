import classNames from 'classnames/bind';
import {Grid, Row, Column} from '~/components/Grid';
import styles from './CartAndCheckout.module.scss'; 
import Checkout from './Checkout';
import Cart from './Cart';



const cx = classNames.bind(styles);

function CartAndCheckout() {
    return(
        <div className = {cx('container')}>
            <div className={cx('title')}>
                <h2>Order Confirmation</h2>
            </div>
            <Grid className={cx('wide')}>
                <Row className={cx('gutter')}>
                    <Column className = 'l-7'>
                        <Cart />
                    </Column>
                    <Column className='l-5'>
                        <Checkout />
                    </Column>
                </Row>
            </Grid>
        </div>
    );
}

export default CartAndCheckout;