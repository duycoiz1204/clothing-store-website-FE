import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGift,
    faHistory,
    faLock,
    faRightToBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('container')}>
            <div className={cx('item-icon')}>
                <FontAwesomeIcon
                    icon={faUser}
                    className={cx('icon-face icon')}
                />
                <Link to="#" className={cx('link-icon')}>
                    Profile
                </Link>
            </div>
            <div className={cx('item-icon')}>
                <FontAwesomeIcon
                    icon={faLock}
                    className={cx('icon-face icon')}
                />
                <Link to="#" className={cx('link-icon')}>
                    Change Password
                </Link>
            </div>
            <div className={cx('item-icon')}>
                <FontAwesomeIcon
                    icon={faGift}
                    className={cx('icon-face icon')}
                />
                <Link to="#" className={cx('link-icon')}>
                    Promotion
                </Link>
            </div>
            <div className={cx('item-icon')}>
                <FontAwesomeIcon
                    icon={faHistory}
                    className={cx('icon-face icon')}
                />
                <Link to="#" className={cx('link-icon')}>
                    Order History
                </Link>
            </div>
            <p className={cx('line')}></p>
            <div className={cx('item-icon')}>
                <FontAwesomeIcon
                    icon={faRightToBracket}
                    className={cx('icon-face icon')}
                />
                <Link to="#" className={cx('link-icon')}>
                    Logout
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
