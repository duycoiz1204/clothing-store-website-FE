import classNames from 'classnames/bind';

import styles from './ProductItem.module.scss';
import image from '~/assets/images/clothes1.png';

const cx = classNames.bind(styles);

function ProductItem({ className, product }) {
    const classNames = cx('container', {
        [className]: className,
    });

    return (
        <div className={classNames}>
            <div className={cx('item-header')}>
                <img className={cx('item-image')} src={image} alt="" />
            </div>
            <div className={cx('item-content')}>
                <div className={cx('content-top')}>
                    <span className={cx('product-name')}>{product.name}</span>
                    <span className={cx('product-status')}>
                        {product.status.name}
                    </span>
                </div>
                <div className={cx('content-bottom')}>
                    <span className={cx('initial-price')}>
                        ${product.price}
                    </span>
                    <span className={cx('current-price')}>
                        ${product.discount}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
