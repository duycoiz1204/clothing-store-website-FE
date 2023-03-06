import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames/bind";

import Button from "~/components/Button";
import styles from "./OrderAdmin.module.scss"

const cx = classNames.bind(styles)

function OrderAdmin() {
    return (<div className={cx('container')}>
        <div className={cx('header')}>
                <h2 className={cx('title')}>Order</h2>
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
                        <th className={cx('table-header')}>Order ID</th>
                        <th className={cx('table-header')}>Customer ID</th>
                        <th className={cx('table-header')}>Order Date</th>
                        <th className={cx('table-header')}>Total</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Order ID</td>
                        <td className={cx('table-data')}>Customer ID</td>
                        <td className={cx('table-data')}>Order Date</td>
                        <td className={cx('table-data')}>Total</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Order ID</td>
                        <td className={cx('table-data')}>Customer ID</td>
                        <td className={cx('table-data')}>Order Date</td>
                        <td className={cx('table-data')}>Total</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Order ID</td>
                        <td className={cx('table-data')}>Customer ID</td>
                        <td className={cx('table-data')}>Order Date</td>
                        <td className={cx('table-data')}>Total</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Order ID</td>
                        <td className={cx('table-data')}>Customer ID</td>
                        <td className={cx('table-data')}>Order Date</td>
                        <td className={cx('table-data')}>Total</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Order ID</td>
                        <td className={cx('table-data')}>Customer ID</td>
                        <td className={cx('table-data')}>Order Date</td>
                        <td className={cx('table-data')}>Total</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Order ID</td>
                        <td className={cx('table-data')}>Customer ID</td>
                        <td className={cx('table-data')}>Order Date</td>
                        <td className={cx('table-data')}>Total</td>
                    </tr>
                </tbody>
            </table>
    </div>

    );
}

export default OrderAdmin;