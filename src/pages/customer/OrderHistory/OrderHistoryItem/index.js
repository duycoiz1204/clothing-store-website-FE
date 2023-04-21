import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import styles from './OrderHistoryItem.module.scss';
import {Column} from '~/components/Grid';
import Button from '~/components/Button';
import orderService from '~/services/OrderService';
import { CustomerContext } from '~/contexts/Customer/CustomerContext';
import React, { useState, useEffect, useContext } from 'react';

const cx = classNames.bind(styles);
function OrderHistoryItem(){
    const [orderHistory, setOrderHistory] = useState('');
    const { accessToken } = useContext(CustomerContext);

    useEffect(() => {
        let ignore = false;
        const fetchApi = async () => {
            const data = await orderService.getAllOrderOfCustomer(accessToken);
            if (!ignore) {
                setOrderHistory(data);
                console.log(data);
            }
        };
        !accessToken || fetchApi();
        return () => (ignore = true);
    }, [accessToken]);


    const handleClickCancleOrder = (id) => {
        try {
            orderService.deleteOrder(id, accessToken)
            .then((response) => {
                toast('Cancle order successfully!', {
                    type: 'success'
                })
            })
        } catch (err) {
            toast('Cancle order fail!', {
                type: 'error'
            })
        }
    }
    return (
        <React.Fragment>
        {Object.values(orderHistory).map((order, counter) =>
            <Column className={cx('l-12')}>
                <div className={cx('product_content')}>
                    <div className={cx('title_price')}>
                        <p className={cx('price')}><b>Date Create</b>: {order.createdAt}</p>
                    </div>
                    <div className={cx('information')}>
                        <div className={cx('total_amount')}>
                            <div className={cx('quantity')}>
                                <p className={cx('price_small')}><b>Phone</b>: {order.phone}</p>
                                <p className={cx('quantity')}><b>Address</b>: {order.address}</p>
                            </div>
                            <div>
                                <p className={cx('price_large')}>Total: {order.total} VNĐ</p>
                            </div>
                        </div>
                        <div className={cx('size_button')}>
                            <div className={cx('color-size')}>
                                <p className={cx('size')}><b>Status:</b> </p> 
                                {order.status === statusSignal[0] && (
                                    <span className={cx('pending-status')}> 
                                        {order.status}
                                    </span>
                                )}
                                {order.status === statusSignal[1] && (
                                    <span className={cx('approved-status')}> 
                                        {order.status}
                                    </span>
                                )}
                                {order.status === statusSignal[2] && (
                                    <span className={cx('rejected-status')}> 
                                        {order.status}
                                    </span>
                                )}
                                {order.status === statusSignal[3] && (
                                    <span className={cx('canceled-status')}> 
                                        {order.status}
                                    </span>
                                )}
                               
                            </div>
                            <div className={cx('color-size')}>
                                <p className={cx('size')}><b>Message</b>: {order.message}</p>
                            </div>
                            <div className={cx('btn')}>
                            {order.status === statusSignal[0] && (
                                <Button primary className={cx('btn-cancle')}
                                onClick={() => handleClickCancleOrder(order.id)}
                                >Cancel</Button>

                            )}
                                <Button primary>Order details</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Column>
        )}
        </React.Fragment>
    )
}

export default OrderHistoryItem;

const statusSignal = {
    0: 'Pending',
    1: 'Approved',  
    2: 'Rejected',
    3: 'Canceled',
};