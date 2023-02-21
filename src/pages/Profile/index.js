import { Grid, Row, Column } from '~/components/Grid';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import GroupInput from './GroupInput';
import PictureControls from './PictureControls';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('container')}>
            <Grid className={cx('wide')}>
                <Row>
                    <Column className={cx('l-4')} />
                    <Column className={cx('l-8')}>
                        <div className={cx('profile')}>
                            <PictureControls />
                            <GroupInput />
                        </div>
                    </Column>
                </Row>
            </Grid>
        </div>
    );
}

export default Profile;
