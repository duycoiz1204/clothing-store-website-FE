import classNames from 'classnames/bind';

import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

function ProductItem({ className, product }) {
    const classNames = cx('container', {
        [className]: className,
    });

    const firstProductImage =
        product?.productImages &&
        !!product.productImages[0] &&
        product.productImages[0].image;

    return (
        <div className={classNames}>
            <div className={cx('item-header')}>
                <img
                    className={cx('item-image')}
                    src={
                        firstProductImage &&
                        BACKEND_BASE_URL + firstProductImage
                    }
                    alt={product?.name}
                />
            </div>
            <div className={cx('item-content')}>
                <div className={cx('content-top')}>
                    <span className={cx('product-name')}>{product?.name}</span>
                    <span className={cx('product-status')}>
                        {product?.status?.name}
                    </span>
                </div>
                <div className={cx('content-bottom')}>
                    <span className={cx('initial-price')}>
                        ${product?.price}
                    </span>
                    <span className={cx('current-price')}>
                        ${product?.discount}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
