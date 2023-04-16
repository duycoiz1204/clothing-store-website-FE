import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './CartProductItem.module.scss';
import Select from '~/components/Select';
import QuantityButton from '~/components/QuantityButton';
import { Column } from '../Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

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
                <img
                    className={cx('item-image')}
                    src={baseURL + product.productImages[0].image}
                    alt={product.name}
                />
            </Column>
            <Column className="l-6">
                <div className={cx('content-center')}>
                    <div className={cx('product-info')}>
                        <h4 className={cx('product-name')}>{product.name}</h4>
                        <span className={cx('product-price')}>
                            $ {product.price}
                        </span>
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
                    </div>
                </div>
            </Column>
            <Column className="l-3">
                <div className={cx('del')}>
                    <span className={cx('product-price')}>
                        $ {cartDetail.total}
                    </span>
                    <Button
                        primary
                        small
                        leftIcon={<FontAwesomeIcon icon={faRemove} />}
                    >
                        Delete
                    </Button>
                </div>
            </Column>
        </div>
    );
}
export default CartProductItem;
