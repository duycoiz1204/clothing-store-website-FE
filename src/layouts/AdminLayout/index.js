import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Column } from '~/components/Grid';

import Sidebar from './Sidebar';

import styles from './AdminLayout.module.scss';

const cx = classNames.bind(styles);

function AdminLayout() {
    return (
        <div className={cx('container')}>
            <Column className="l-2">
                <Sidebar />
            </Column>
            <Column className="l-10">
                    <Outlet />
            </Column>

        </div>
    );
}

export default AdminLayout;
