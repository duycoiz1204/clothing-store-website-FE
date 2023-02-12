import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';

import BigImage from '~/components/BigImage';
import styles from './ImageLayout.module.scss';

const cx = classNames.bind(styles);

function ImageLayout() {
    return (
        <div className={cx('container')}>
            <BigImage />
            <Outlet />
        </div>
    );
}

export default ImageLayout;
