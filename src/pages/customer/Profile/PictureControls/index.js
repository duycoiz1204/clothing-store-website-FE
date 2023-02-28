import classNames from 'classnames/bind';

import Button from '~/components/Button';

import styles from './PictureControls.module.scss';
import image from '~/assets/images/clothes1.png';

const cx = classNames.bind(styles);

function PictureControls() {
    return (
        <div className={cx('container')}>
            <img className={cx('user')} src={image} alt="" />
            <Button primary>Upload new picture</Button>
            <Button outline>Delete</Button>
        </div>
    );
}

export default PictureControls;
