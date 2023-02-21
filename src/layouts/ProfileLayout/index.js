import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { Grid, Row, Column } from '~/components/Grid';

import classNames from 'classnames/bind';

import styles from './ProfileLayout.module.scss';
import UserBlock from './UserBlock';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

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
