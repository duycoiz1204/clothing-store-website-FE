import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faClipboardUser,
    faCubesStacked,
    faPercent,
    faReceipt,
    faShirt,
    faTableColumns,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import logo from '~/assets/images/logo.png';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('container')}>
            <div className={cx('top')}>
                <img src={logo} className={cx('logo')} alt="logo" />
                <div className={cx('navigation')}>
                    {navigationItems.map((item, index) => (
                        <Link to={item.to} className={cx('link')}>
                            <FontAwesomeIcon
                                className={cx('icon')}
                                icon={item.icon}
                            />
                            <span className={cx('text')}>{item.text}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className={cx('bottom')}>
                <Link className={cx('link')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faArrowRightFromBracket} />
                    <span className={cx('text')}>Exit</span>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;

const navigationItems = [
    {
        to: '/admin',
        text: 'Dashboard',
        icon: faTableColumns,
    },
    {
        to: '/admin/staff',
        text: 'Staffs',
        icon: faClipboardUser,
    },
    {
        to: '/admin/customer',
        text: 'Customers',
        icon: faUsers,
    },
    {
        to: '/admin/category',
        text: 'Categories',
        icon: faCubesStacked,
    },
    {
        to: '/admin/product',
        text: 'Products',
        icon: faShirt,
    },
    {
        to: '/admin/order',
        text: 'Orders',
        icon: faReceipt,
    },
    {
        to: '/admin/promotion',
        text: 'Promotions',
        icon: faPercent,
    },
];
