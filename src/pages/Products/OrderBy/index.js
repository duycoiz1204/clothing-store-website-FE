import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '~/components/Button';
import styles from './OrderBy.module.scss';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function OrderBy() {
    return (
        <div className={cx('container')}>
            <div className={cx('items-found')}>Found 100 items</div>
            <div className={cx('controls')}>
                <span className={cx('title')}>Sort by</span>
                <Button primary rightIcon={<FontAwesomeIcon icon={faCaretDown} />}>
                    New Arrivals
                </Button>
            </div>
        </div>
    );
}

export default OrderBy;
