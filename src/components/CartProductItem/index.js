import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './CartProductItem.module.scss';
import Select from '~/components/Select';
import QuantityButton from '~/components/QuantityButton';
import { Column } from '../Grid';

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

const cx = classNames.bind(styles);

function CartProductItem({ cartDetail }) {
    const [selectedColorId, setSelectedColorId] = useState(cartDetail.color.id);
    const [selectedSizeId, setSelectedSizeId] = useState(cartDetail.size.id);
    const [quantity, setQuantity] = useState(cartDetail.quantity);
    const product = cartDetail.product;
    const colors = product.inventories.map((i) => i.color);
    const sizes = product.inventories.map((i) => i.size);

    return (
        <div className={cx('container')}>
            <Column className="l-3">
            <div className= {cx('image-block')}>
                <img
                    className={cx('item-image')}
                    src={baseURL + product.productImages[0].image}
                    alt={product.name}
                />
            </div>
            </Column>
            <Column className="l-9">
                <div className={cx('content-center')}>
                    <div className={cx('product-info')}>
                        <div className={cx('product-total-price')}>
                            <div>
                                <h4 className={cx('product-name')}>{product.name}</h4>
                                <span className={cx('product-price')}>
                                        {product.price} VNĐ
                                </span>
                            </div>
                            <div>
                                <span className={cx('product-price-total')}>
                                    {cartDetail.total} VNĐ
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className={cx('options')}>
                   
                        <div className={cx('choose-size')}>
                            <Select
                                options={sizes}
                                selected={selectedSizeId}
                                small
                                onChange={(e) =>
                                    setSelectedSizeId(e.target.value)
                                }
                            />
                        </div>
                        <div className={cx('choose-color')}>
                            <Select
                                options={colors}
                                selected={selectedColorId}
                                small
                                onChange={(e) =>
                                    setSelectedColorId(e.target.value)
                                }
                            />
                        </div>
                        <div className={cx('button-number-product')}>
                            <QuantityButton
                                small
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                        </div>
                        <div className={cx('del')}>
                            <div className={cx('btn-delete')}>
                                <Button
                                    primary
                                    small
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Column>
        </div>
    );
}
export default CartProductItem;
