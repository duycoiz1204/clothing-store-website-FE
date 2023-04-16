import classNames from 'classnames/bind';

import styles from './Select.module.scss';

const cx = classNames.bind(styles);

function Select({ className, options, selected, small, large, onChange }) {
    return (
        <select
            className={cx('container', {
                [className]: className,
                small,
                large,
            })}
            value={selected}
            onChange={onChange}
        >
            <option value="">Select item</option>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    );
}

export default Select;
