import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames/bind";

import Button from "~/components/Button";
import styles from "./CustomerAdmin.module.scss"

const cx = classNames.bind(styles)

function CustomerAdmin() {
    return (<div className={cx('container')}>
        <div className={cx('header')}>
                <h2 className={cx('title')}>Customer</h2>
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
                        <th className={cx('table-header')}>Customer ID</th>
                        <th className={cx('table-header')}>Email</th>
                        <th className={cx('table-header')}>Password</th>
                        <th className={cx('table-header')}>Name</th>
                        <th className={cx('table-header')}>Gender</th>
                        <th className={cx('table-header')}>Phone Number</th>
                        <th className={cx('table-header')}>Image</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Customer ID</td>
                        <td className={cx('table-data')}>Email</td>
                        <td className={cx('table-data')}>Password</td>
                        <td className={cx('table-data')}>Name</td>
                        <td className={cx('table-data')}>Gender</td>
                        <td className={cx('table-data')}>Phone Number</td>
                        <td className={cx('table-data')}>Image</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Customer ID</td>
                        <td className={cx('table-data')}>Email</td>
                        <td className={cx('table-data')}>Password</td>
                        <td className={cx('table-data')}>Name</td>
                        <td className={cx('table-data')}>Gender</td>
                        <td className={cx('table-data')}>Phone Number</td>
                        <td className={cx('table-data')}>Image</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Customer ID</td>
                        <td className={cx('table-data')}>Email</td>
                        <td className={cx('table-data')}>Password</td>
                        <td className={cx('table-data')}>Name</td>
                        <td className={cx('table-data')}>Gender</td>
                        <td className={cx('table-data')}>Phone Number</td>
                        <td className={cx('table-data')}>Image</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Customer ID</td>
                        <td className={cx('table-data')}>Email</td>
                        <td className={cx('table-data')}>Password</td>
                        <td className={cx('table-data')}>Name</td>
                        <td className={cx('table-data')}>Gender</td>
                        <td className={cx('table-data')}>Phone Number</td>
                        <td className={cx('table-data')}>Image</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Customer ID</td>
                        <td className={cx('table-data')}>Email</td>
                        <td className={cx('table-data')}>Password</td>
                        <td className={cx('table-data')}>Name</td>
                        <td className={cx('table-data')}>Gender</td>
                        <td className={cx('table-data')}>Phone Number</td>
                        <td className={cx('table-data')}>Image</td>
                    </tr>
                    <tr className={cx('table-row')}>
                        <td className={cx('table-data')}>Customer ID</td>
                        <td className={cx('table-data')}>Email</td>
                        <td className={cx('table-data')}>Password</td>
                        <td className={cx('table-data')}>Name</td>
                        <td className={cx('table-data')}>Gender</td>
                        <td className={cx('table-data')}>Phone Number</td>
                        <td className={cx('table-data')}>Image</td>
                    </tr>
                    
                </tbody>
            </table>
    </div>

    );
}

export default CustomerAdmin;