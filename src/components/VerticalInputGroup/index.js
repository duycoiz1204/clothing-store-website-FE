import classNames from 'classnames/bind';

import Input from '~/components/Input';

import styles from './VerticalInputGroup.module.scss';

const cx = classNames.bind(styles);

function VerticalInputGroup({ title, placeholder }) {
    return (
        <div className={cx('container')}>
            <h4 className={cx('title')}>{title}</h4>
            <Input type="text" placeholder={placeholder} />
        </div>
    );
}

export default VerticalInputGroup;