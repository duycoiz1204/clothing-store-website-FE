import classNames from 'classnames/bind';
import styles from './OrderHistoryItem.module.scss';
import image from '~/assets/images/clothes1.png'
import {Column} from '~/components/Grid';
import Button from '~/components/Button';
import React from 'react';

const cx = classNames.bind(styles);
function OrderHistoryItem(){
    return (
        <React.Fragment>
            <Column className={cx('l-3')}>
                <div>
                    <div className={cx('img_block')}>
                        <img alt="" src={image} className={cx('img')}></img>
                    </div>
                </div>
            </Column>
            <Column className={cx('l-9')}>
                <div className={cx('product_content')}>
                    <div className={cx('title_price')}>
                        <p className={cx('title')}>Product Name</p>
                        <p className={cx('price')}>250.000vnđ</p>
                    </div>
                    <div className={cx('total_amount')}>
                        <div className={cx('quantity')}>
                            <p className={cx('price_small')}>250.000 vnđ</p>
                            <p className={cx('quantity')}>x1</p>
                        </div>
                        <div>
                            <p className={cx('price_large')}>Total amount: 250.000vnđ</p>
                        </div>
                    </div>
                    <div className={cx('size_button')}>
                        <div className={cx('color-size')}>
                            <p className={cx('size')}>M</p>
                            <p className={cx('color')}>Black</p>
                        </div>

                        <div className={cx('btn')}>
                            <Button primary>Buy again</Button>
                            <Button primary>Order details</Button>
                        </div>
                    </div>
                </div>
            </Column>
        </React.Fragment>
    )
}
export default OrderHistoryItem;