import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ImageDisplay.module.scss';
import image from '~/assets/images/clothes1.png';

const cx = classNames.bind(styles);

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

function ImageDisplay({ product }) {
    const productImages = product.productImages;
    const [selectedImageId, setSelectedImageId] = useState(productImages[0].id);
    const selectedImage = productImages.find((pi) => pi.id === selectedImageId);
    const restImages = productImages.filter((pi) => pi.id !== selectedImage.id);

    return (
        <div className={cx('container')}>
            <div className={cx('main')}>
                <div className={cx('block-image')}>
                    <img
                        className={cx('main-image')}
                        src={baseURL + selectedImage.image}
                        alt="Product"
                    />
                </div>
            </div>
            <ul className={cx('list')}>
                {restImages.map((image) => (
                    <li
                        key={image.id}
                        className={cx('item')}
                        onClick={() => setSelectedImageId(image.id)}
                    >
                        <img
                            className={cx('image')}
                            src={baseURL + image.image}
                            alt="Product"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ImageDisplay;
