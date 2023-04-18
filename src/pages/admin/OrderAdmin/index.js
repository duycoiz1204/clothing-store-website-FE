import { useEffect, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames/bind";
import { toast } from 'react-toastify';

import Button from "~/components/Button";
import styles from "./OrderAdmin.module.scss"
import orderService from "~/services/OrderService";


const cx = classNames.bind(styles)

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0cm9uZ2R1YzA1MDMyMDAyQGdtYWlsLmNvbSIsImV4cCI6MTY4MTgzNDYyOCwiaWF0IjoxNjgxNzQ4MjI4LCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiQ1VTVE9NRVIifV19.tC9BippgBySpe8ilRD7sNflf_9y3zTr1H49dIJtcfKo'

function OrderAdmin() {

    const [orders, setOrders] = useState([]);

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

    const deleteHandler = (id) => {
        try {
            orderService.deleteOrder(id, accessToken)
            .then((response) => {
                toast('Delete order successfully!', {
                    type: 'default'
                })
                initOrders();
            })

        } catch (err) {
            toast('Delete order fail!', {
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
                        <td className={cx('table-data')}>{order.total}</td>
                        <td>
                        <Button 
                            className={cx('delete')} 
                            onClick={() => {
                            deleteHandler(order.id)
                        }}>Delete
                        </Button>
                            <Button className={cx('update')}>Edit</Button> 
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
    </div>

    );
}

export default OrderAdmin;