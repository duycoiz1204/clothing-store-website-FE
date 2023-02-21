import classNames from 'classnames/bind';

import styles from './UserBlock.module.scss';
import image from '~/assets/images/user_promotion.png';

const cx = classNames.bind(styles);

function UserBlock() {
    return (
        <div className={cx('container')}>
            <div className={cx('img_user-block')}>
                <img alt="" src= {image} className={cx('user-image')}></img>
            </div>
            <h2 className={cx('heading')}>Username/Promotion</h2>
        </div>
    );
}

export default UserBlock;
