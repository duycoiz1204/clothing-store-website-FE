import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import styles from './CartProductItem.module.scss';
import image from '~/assets/images/clothes1.png';
import Select from '~/components/Select';
import QuantityButton from '~/components/QuantityButton';
import { Column } from '../Grid';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CartProductItem({ className, product}) {
    const classNames = cx('container', {
        [className]: className,
    });
    return(
        <div className={cx('container')}>
            <Column className='l-3'>
                <img className={cx('item-image')} src={image} alt="" />
            </Column>
            <Column className='l-6'>
                <div className={cx('content-center')}>
                    <div class={cx('product-info')}>
                        <h4 className={cx('product-name')}>{product.name}</h4>
                        <span className={cx('product-price')}>{product.price}</span>
                    </div>
                    <div className={cx('options')}>
                        <div className={cx('choose-size')}>
                            <Select options={options_size} />
                        </div>
                        <div className={cx('choose-color')}>
                            <Select options={options_color} />
                        </div>
                        <div className={cx('button-number-product')}>
                            <QuantityButton />
                        </div>
                    </div>
                </div>
            </Column>
            <Column className='l-3'>
                <div className={cx('del')}>
                    <span className={cx('product-price')}>{product.price}</span>
                    <p className={cx('space')}></p>
                    <Button primary  className={cx('delete-button small')} leftIcon={<FontAwesomeIcon icon={faRemove} />}>Delete</Button>
                </div>
            </Column>
        </div>
    );
}
export default CartProductItem;

const options_size = [
    {
        name: 'S',
        selected: true,
    },
    {
        name: 'M',
        selected: false,
    },
    {
        name: 'L',
        selected: false,
    },
];
const options_color = [
    {
        name: 'Grey',
        selected: true,
    },
    {
        name: 'Black',
        selected: false,
    },
    {
        name: 'Blue',
        selected: false,
    },
];