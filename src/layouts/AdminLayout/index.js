import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import Sidebar from './Sidebar';

import styles from './AdminLayout.module.scss';

const cx = classNames.bind(styles);

function AdminLayout() {
    return (
        <div className={cx('container')}>
            <Sidebar />
            <Outlet />
        </div>
    );
}

export default AdminLayout;
