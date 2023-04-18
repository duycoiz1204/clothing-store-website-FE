import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames/bind";

import { useEffect, useState } from 'react';
import Button from "~/components/Button";
import styles from "./CustomerAdmin.module.scss"
import customerServices from '~/services/CustomerService'

const cx = classNames.bind(styles)

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0cm9uZ2R1YzA1MDMyMDAyQGdtYWlsLmNvbSIsImV4cCI6MTY4MTgzNDYyOCwiaWF0IjoxNjgxNzQ4MjI4LCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiQ1VTVE9NRVIifV19.tC9BippgBySpe8ilRD7sNflf_9y3zTr1H49dIJtcfKo'

function CustomerAdmin() {

    const [customerAccounts, setCustomerAccounts] = useState([]);
     

    const initCustomer = () => {
        customerServices.getAllCustomerAccounts(accessToken).then((account) => {
            setCustomerAccounts(account.data);
       })
       .catch ((err) => {
           console.error(err);
       })
   }
    useEffect(() => {
        initCustomer()
    }, []);

    return (<div className={cx('container')}>
        <div className={cx('header')}>
                <h2 className={cx('title')}>Customer Management</h2>
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
                        <th className={cx('table-header')}>STT</th>
                        <th className={cx('table-header')}>Name</th>
                        <th className={cx('table-header')}>Email</th>
                        <th className={cx('table-header')}>Gender</th>
                        <th className={cx('table-header')}>Phone Number</th>
                        <th className={cx('table-header')}>Address</th>
                        <th className={cx('table-header')}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {customerAccounts.map((customer, counter) => 
                    <tr key= {customer.id} className={cx('table-row')}>
                        <td className={cx('table-data')}>{counter + 1}</td>
                        <td className={cx('table-data')}>{customer.name}</td> 
                        <td className={cx('table-data')}>{customer.email}</td>
                        <td className={cx('table-data')}>{customer.gender}</td>
                        <td className={cx('table-data')}>{customer.phone}</td>
                        <td className={cx('table-data')}>{customer.address}</td>
                        <td className={cx('table-data')}>
                            <Button className={cx('update')}>Edit</Button> 
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
    </div>

    );
}

export default CustomerAdmin;