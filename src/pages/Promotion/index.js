import classNames from 'classnames/bind';
import styles from './Promotion.module.scss';
import Button from '~/components/Button';
import images from '~/assets/images/voucher.png';

const cx = classNames.bind(styles);

function Promotion() {
    return (
        <div className={cx('container')}>
            <div className={cx('found-item')}>
                <div className={cx('text-found')}>
                    <p>Found 100 items</p>
                </div>
                <div className={cx('text-btn')}>
                    <div className={cx('text-sort')}>
                        <p className={cx('text-sortby')}>Sort by</p>
                    </div>
                    <div>
                        <Button
                            primary
                            className={cx('btn-newviral')}
                            large
                        >New Arrival</Button>
                    </div>
                </div>
            </div>
            <div className={cx('product_item')}>
                <div className={cx('img-block')}>
                    <img alt="" src={images} className={cx('image')}></img>
                </div>
                <div className={cx('item-content')}>
                    <div className={cx('item-left')}>
                        <h4 className={cx('item-title')}>10% Discount</h4>
                        <p className={cx('item-voucher')}>
                            Voucher is valid for orders of at least $20.{' '}
                        </p>
                        <p className={cx('item-expiry')}>
                            Expiry date: 15.05.2023
                        </p>
                    </div>
                    <div className={cx('btn-apply')}>
                        <Button primary>Apply</Button>
                    </div>
                </div>
            </div>
            <div className={cx('product_item')}>
                <div className={cx('img-block')}>
                    <img alt="" src={images} className={cx('image')}></img>
                </div>
                <div className={cx('item-content')}>
                    <div className={cx('item-left')}>
                        <h4 className={cx('item-title')}>10% Discount</h4>
                        <p className={cx('item-voucher')}>
                            Voucher is valid for orders of at least $20.{' '}
                        </p>
                        <p className={cx('item-expiry')}>
                            Expiry date: 15.05.2023
                        </p>
                    </div>
                    <div className={cx('btn-apply')}>
                        <Button primary>Apply</Button>
                    </div>
                </div>
            </div>
            <div className={cx('product_item')}>
                <div className={cx('img-block')}>
                    <img alt="" src={images} className={cx('image')}></img>
                </div>
                <div className={cx('item-content')}>
                    <div className={cx('item-left')}>
                        <h4 className={cx('item-title')}>10% Discount</h4>
                        <p className={cx('item-voucher')}>
                            Voucher is valid for orders of at least $20.{' '}
                        </p>
                        <p className={cx('item-expiry')}>
                            Expiry date: 15.05.2023
                        </p>
                    </div>
                    <div className={cx('btn-apply')}>
                        <Button primary>Apply</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion;
