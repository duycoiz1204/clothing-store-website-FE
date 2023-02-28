import classNames from 'classnames/bind';

import styles from './ImageDisplay.module.scss';
import image from '~/assets/images/clothes1.png';

const cx = classNames.bind(styles);

function ImageDisplay() {
    return (
        <div className={cx('container')}>
            <div className={cx('main')}>
                <img className={cx('main-image')} src={image} alt="Product" />
            </div>
            <ul className={cx('list')}>
                <li className={cx('item')}>
                    <img className={cx('image')} src={image} alt="Product" />
                </li>
                <li className={cx('item')}>
                    <img className={cx('image')} src={image} alt="Product" />
                </li>
                <li className={cx('item')}>
                    <img className={cx('image')} src={image} alt="Product" />
                </li>
                <li className={cx('item')}>
                    <img className={cx('image')} src={image} alt="Product" />
                </li>
            </ul>
        </div>
    );
}

export default ImageDisplay;
