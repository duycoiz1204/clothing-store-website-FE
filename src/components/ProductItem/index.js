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
            <div className={cx('product-block')}>
                <div className={cx('item-header')}>
                    <div className={cx('block-image')}>
                        <img
                            className={cx('item-image')}
                            src={
                                firstProductImage &&
                                BACKEND_BASE_URL + firstProductImage
                            }
                            alt={product?.name}
                        />
                    </div>
                </div>
                <div className={cx('item-content')}>
                    <div className={cx('content-top')}>
                            <div className={cx('block-name')}>
                                <span className={cx('product-name')}>{product?.name}</span>
                            </div>
                            <div>
                                <span className={cx('product-status')}>
                                    {product?.status?.name}
                                </span>
                            </div>
                    </div>
                    <div className={cx('content-bottom')}>
                        <span className={cx('initial-price')}>
                            {product?.netPrice} VNĐ
                        </span>
                        <span className={cx('current-price')}>
                            ${product?.price} VNĐ
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
