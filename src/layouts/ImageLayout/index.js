import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';

import BigImage from '~/layouts/components/BigImage';
import styles from './ImageLayout.module.scss';
import { Row, Column } from '~/components/Grid';

const cx = classNames.bind(styles);

function ImageLayout() {
    return (
        <div>
            <Row className={cx('row')}>
                <Column className={cx('l-6')}>
                    <BigImage />
                </Column>
                <Column className={cx('l-6')}>
                    <Outlet />
                </Column>
            </Row>
        </div>
    );
}

export default ImageLayout;
