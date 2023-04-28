import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';

import Button from '~/components/Button';
import Select from '~/components/Select';
import QuantityButton from '~/components/QuantityButton';

import styles from './ProductInfo.module.scss';

import { AppContext } from '~/AppContext';
import { CustomerContext } from '~/contexts/Customer/CustomerContext';

import cartService from '~/services/CartService';

const cx = classNames.bind(styles);

function ProductInfo({ product }) {
    const [selectedColorId, setSelectedColorId] = useState();
    const [selectedSizeId, setSelectedSizeId] = useState();
    const [quantity, setQuantity] = useState(1);
    const { accessToken } = useContext(AppContext);
    const { setCart } = useContext(CustomerContext);
    const { id } = useParams();

    const colors = product.inventories.map((i) => i.color);
    const sizes = product.inventories.map((i) => i.size);

    const handleAddToCart = async () => {
        try {
            const data = await cartService.addProductToCart(
                {
                    productId: id,
                    colorId: selectedColorId,
                    sizeId: selectedSizeId,
                    quantity,
                },
                accessToken,
            );
            setCart();
            toast('Order created successfully', {
                type: 'success',
            });
        } catch (e) {
            toast('Opps. An error occurred!', {
                type: 'error',
            });
        }
    };

    return (
        <div className={cx('container')}>
            <div className={cx('information')}>
                <h1 className={cx('name')}>{product.name}</h1>
                <div className={cx('tips')}>
                    <div className={cx('tip')}>
                        Brand:{' '}
                        <span className={cx('brand')}>Vivienne Westwood</span>
                    </div>
                    <div className={cx('tip')}>
                        Status:{' '}
                        <span className={cx('status')}>
                            {product.status.name}
                        </span>
                    </div>
                    <div className={cx('tip')}>
                        Category:{' '}
                        <span className={cx('category')}>
                            {product.category.name}
                        </span>
                    </div>
                    <div className={cx('tip')}>
                        Discount:{' '}
                        <span className={cx('category')}>
                            {product.percentageDiscount}%
                        </span>
                    </div>
                    <div className={cx('tip')}>
                        Amount Discount:{' '}
                        <span className={cx('category')}>
                            {product.amountDiscount} VNĐ
                        </span>
                    </div>
                </div>
                <div className={cx('price')}>
                    <div className={cx('current')}>{product.netPrice} VNĐ</div>
                    <div className={cx('initial')}>{product.price} VNĐ</div>
                </div>
                <div className={cx('controls')}>
                    <div className={cx('choices')}>
                        <Select
                            className={cx('select')}
                            options={colors}
                            selected={selectedColorId}
                            onChange={(e) => setSelectedColorId(e.target.value)}
                        />
                        <Select
                            className={cx('select')}
                            options={sizes}
                            selected={selectedSizeId}
                            onChange={(e) => setSelectedSizeId(e.target.value)}
                        />
                        <QuantityButton
                            quantity={quantity}
                            setQuantity={setQuantity}
                        />
                    </div>
                    <Button primary onClick={handleAddToCart}>
                        Add to cart
                    </Button>
                </div>
            </div>
            <div className={cx('description')}>
                <h4 className={cx('title')}>Description</h4>
                <div className={cx('content')}>{product.description}</div>
            </div>
        </div>
    );
}

export default ProductInfo;
