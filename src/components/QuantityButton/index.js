import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './QuantityButton.module.scss';

const cx = classNames.bind(styles);

function QuantityButton({ quantity, setQuantity, small, large }) {

    function handleMinusClick() {
        quantity > 0 && setQuantity(quantity - 1);
    }

    function handlePlusClick() {
        setQuantity(quantity + 1);
    }

    return (
        <div
            className={cx('container', {
                small,
                large,
            })}
        >
            <button
                className={cx('button', 'minus', {
                    disabled: quantity === 0,
                })}
                onClick={handleMinusClick}
            >
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className={cx('quantity')}>{quantity}</div>
            <button className={cx('button', 'plus')} onClick={handlePlusClick}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}

export default QuantityButton;
