import classNames from 'classnames/bind';

import styles from './BigImage.module.scss';
import bigImage from '~/assets/images/BigImage.jpg';



const cx = classNames.bind(styles);

function BigImage() {
    return <div className={cx('container')}>
        <img
                    className={cx('img-background')}
                    src={bigImage}
                    alt=""
                ></img>
    </div>;
}

export default BigImage;
