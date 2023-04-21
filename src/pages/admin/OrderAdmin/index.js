import { useEffect, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames/bind";
import { toast } from 'react-toastify';

import Input from "~/components/Input";
import Button from "~/components/Button";
import styles from "./OrderAdmin.module.scss"
import orderService from "~/services/OrderService";


const cx = classNames.bind(styles)

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0cm9uZ2R1YzA1MDMyMDAyQGdtYWlsLmNvbSIsImV4cCI6MTY4MjA2MTc4MSwiaWF0IjoxNjgxOTc1MzgxLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiQ1VTVE9NRVIifV19.MwDvZwXmwLgt_sSnliUaf8koSRRUkTXQsc4r23-Q9Zg'

function OrderAdmin() {

    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState('');

    const initOrders = () => {
        orderService.getAllOrders(accessToken).then((order) => {
            setOrders(order.data);
            console.log(order)
        })
        .catch ((err) => {
            console.error(err)
        })
    }

    useEffect(() => {
        initOrders()
    }, [])

    const cancleHandler = (id) => {
        try {
            orderService.deleteOrder(id, accessToken)
            .then((response) => {
                toast('Cancle order successfully!', {
                    type: 'default'
                })
                initOrders();
            })

        } catch (err) {
            toast('Cancle order fail!', {
                type: 'error'
            })
        }
    }

    const updateHandler = (id) => {
        setStatus("Rejected");
        try {
            orderService.updateOrder(id, status, accessToken)
            .then((response) => {
                console.log("Update order succesfully");
                toast('Update order successfully!', {
                    type: 'default'
                })
            })
        } catch (err) {
            toast('Delete category fail!', {
                type: 'error'
            })
        }

    }
    return (<div className={cx('container')}>
        <div className={cx('header')}>
                <h2 className={cx('title')}>Order Management</h2>
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
                        <th className={cx('table-header')}>Customer Phone</th>
                        <th className={cx('table-header')}>Order Date</th>
                        <th className={cx('table-header')}>Total</th>
                        <th className={cx('table-header')}>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                {orders.map((order, counter) => 
                    <tr key={order.id} className={cx('table-row')}>
                        <td className={cx('table-data')}>{counter + 1}</td>
                        <td className={cx('table-data')}>{order.phone}</td>
                        <td className={cx('table-data')}>{order.createdAt}</td>
                        <td className={cx('table-data')}>{order.total} VNĐ</td>
                        <td>
                        <Button 
                            className={cx('delete')} 
                            onClick={() => {
                            cancleHandler(order.id)
                        }}>Cancle
                        </Button>
                            <Button 
                                className={cx('update')}
                                onClick={() => {
                             updateHandler(order.id)
                        }}
                            >Update</Button> 
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
    </div>

    );
}

export default OrderAdmin;