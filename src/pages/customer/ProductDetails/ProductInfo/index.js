import classNames from 'classnames/bind';

import Button from '~/components/Button';
import Select from '~/components/Select';
import QuantityButton from '~/components/QuantityButton';

import styles from './ProductInfo.module.scss';

const cx = classNames.bind(styles);

function ProductInfo() {
    return (
        <div className={cx('container')}>
            <div className={cx('information')}>
                <h1 className={cx('name')}>Micro Windbreaker Jacket</h1>
                <div className={cx('tips')}>
                    <div className={cx('tip')}>
                        Brand:{' '}
                        <span className={cx('brand')}>Vivienne Westwood</span>
                    </div>
                    <div className={cx('tip')}>
                        Status:{' '}
                        <span className={cx('status')}>New Arrival</span>
                    </div>
                    <div className={cx('tip')}>
                        Category: <span className={cx('category')}>Jacket</span>
                    </div>
                </div>
                <div className={cx('price')}>
                    <div className={cx('current')}>$20.00</div>
                    <div className={cx('initial')}>$25.00</div>
                </div>
                <div className={cx('controls')}>
                    <div className={cx('choices')}>
                        <Select className={cx('select')} options={options} />
                        <QuantityButton />
                    </div>
                    <Button primary>Add to cart</Button>
                </div>
            </div>
            <div className={cx('description')}>
                <h4 className={cx('title')}>Description</h4>
                <div className={cx('content')}>
                    Material: Thick Micro fabric, inside with cool mesh lining.
                    <br />
                    Silicone stitching front and back.
                    <br />
                    HKK zipper in the middle and two sides of the pocket.
                    <br />
                    Drag the photo to the right to see more shirt details.
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;

const options = [
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
