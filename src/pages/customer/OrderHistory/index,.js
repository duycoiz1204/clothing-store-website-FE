import classNames from 'classnames/bind';
import styles from './OrderHistory.module.scss';
import {Row} from '~/components/Grid';
import OrderHistoryItem from './OrderHistoryItem';

const cx = classNames.bind(styles);

function OrderHistory() {
    return (
        <div className={cx('container')}> 
            <Row className={cx('product_item')}>
                <OrderHistoryItem/>
            </Row>
            <Row className={cx('product_item')}>
                <OrderHistoryItem/>
            </Row>
            <Row className={cx('product_item')}>
                <OrderHistoryItem/>
            </Row>
        </div>
    )
}
export default OrderHistory;