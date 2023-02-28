import classNames from 'classnames/bind';

import styles from './Select.module.scss';

const cx = classNames.bind(styles);

function Select({ className, options, small, large, onChange }) {
    return (
        <select
            className={cx('container', {
                [className]: className,
                small,
                large,
            })}
            onChange={onChange}
        >
            {options.map((option, index) => (
                <option key={index} value={index}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}

export default Select;
