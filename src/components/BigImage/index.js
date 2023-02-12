import classNames from 'classnames/bind';

import styles from './BigImage.module.scss';

const cx = classNames.bind(styles);

function BigImage() {
    return <div className={cx('container')}>BigImage</div>;
}

export default BigImage;
