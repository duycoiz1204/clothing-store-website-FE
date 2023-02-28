import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Grid, Row, Column } from '~/components/Grid';
import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';

import Sidebar from './Sidebar';
import UserBlock from './UserBlock';

import styles from './ProfileLayout.module.scss';

const cx = classNames.bind(styles);

function ProfileLayout() {
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx('body')}>
                <Grid className={cx('wide')}>
                    <UserBlock />
                    <Row className={cx('row')}>
                        <Column className={cx('l-4')}>
                            <Sidebar />
                        </Column>
                        <Column className={cx('l-8')}>
                            <Outlet />
                        </Column>
                    </Row>
                </Grid>
            </div>
            <Footer />
        </div>
    );
}

export default ProfileLayout;
