import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import GroupInput from './GroupInput';
import PictureControls from './PictureControls';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('container')}>
            <PictureControls />
            <GroupInput />
        </div>
    );
}

export default Profile;
