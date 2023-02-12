import classNames from 'classnames/bind';
import { Outlet } from 'react-router-dom';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout() {
    return (
        <div className={cx('container')}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;
