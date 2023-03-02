import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './ProductsAdmin.module.scss';

const cx = classNames.bind(styles);

function ProductsAdmin() {
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>Product</h2>
                <div className={cx('right')}>
                    <div className={cx('search-bar')}>
                        <input className={cx('input')} />
                        <button className={cx('button')}>
                            <FontAwesomeIcon
                                className={cx('icon')}
                                icon={faMagnifyingGlass}
                            />
                            <span className={cx('text')}>Search</span>
                        </button>
                    </div>
                    <Button className={cx('add-btn')} outline>
                        Add
                    </Button>
                </div>
            </div>
            <table className={cx('table')}>
                <thead>
                    <tr className={cx('table-row')}>
                        <th className={cx('table-header')}>Product ID</th>
                        <th className={cx('table-header')}>Image</th>
                        <th className={cx('table-header')}>Name</th>
                        <th className={cx('table-header')}>Categogy</th>
                        <th className={cx('table-header')}>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Product ID</td>
                        <td className={cx('table-data')}>Image</td>
                        <td className={cx('table-data')}>Name</td>
                        <td className={cx('table-data')}>Categogy</td>
                        <td className={cx('table-data')}>Quantity</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Product ID</td>
                        <td className={cx('table-data')}>Image</td>
                        <td className={cx('table-data')}>Name</td>
                        <td className={cx('table-data')}>Categogy</td>
                        <td className={cx('table-data')}>Quantity</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Product ID</td>
                        <td className={cx('table-data')}>Image</td>
                        <td className={cx('table-data')}>Name</td>
                        <td className={cx('table-data')}>Categogy</td>
                        <td className={cx('table-data')}>Quantity</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Product ID</td>
                        <td className={cx('table-data')}>Image</td>
                        <td className={cx('table-data')}>Name</td>
                        <td className={cx('table-data')}>Categogy</td>
                        <td className={cx('table-data')}>Quantity</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductsAdmin;
