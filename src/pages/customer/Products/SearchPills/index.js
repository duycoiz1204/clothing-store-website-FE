import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './SearchPills.module.scss';

const cx = classNames.bind(styles);

function SearchPills({ search, setSearch }) {
    const pillsContent = pills.map((pill, index) => (
        <Button key={index} className={cx('pill')} light rounded>
            {pill}
        </Button>
    ));

    return (
        <div className={cx('container')}>
            <div className={cx('container-top')}>
                <div className={cx('search-bar')}>
                    <div className={cx('bar')}>
                        <FontAwesomeIcon
                            className={cx('search-icon')}
                            icon={faMagnifyingGlass}
                        />
                        <input
                            className={cx('input')}
                            type="text"
                            placeholder="Enter to search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FontAwesomeIcon
                            className={cx('cancel-icon')}
                            icon={faXmark}
                        />
                    </div>
                    <Button className={cx('search-btn')} primary>
                        Search
                    </Button>
                </div>
            </div>
            <div className={cx('search-pills__bottom')}>{pillsContent}</div>
        </div>
    );
}

export default SearchPills;

const pills = ['T-Shirt', 'Cardigan', 'Jacket', 'Trousers', 'Loafer'];
