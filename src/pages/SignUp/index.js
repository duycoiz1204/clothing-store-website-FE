import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';

const cx = classNames.bind(styles);

function SignUp() {
    return <div className={cx('container')}>SignUp</div>;
}

export default SignUp;
