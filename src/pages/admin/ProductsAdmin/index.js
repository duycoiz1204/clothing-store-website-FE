import { useEffect, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';

import Button from '~/components/Button';
import styles from './ProductsAdmin.module.scss';
// import { CustomerContext } from '~/contexts/Customer/CustomerContext'

import productService from '~/services/ProductService';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0cm9uZ2R1YzA1MDMyMDAyQGdtYWlsLmNvbSIsImV4cCI6MTY4MjA2MTc4MSwiaWF0IjoxNjgxOTc1MzgxLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiQ1VTVE9NRVIifV19.MwDvZwXmwLgt_sSnliUaf8koSRRUkTXQsc4r23-Q9Zg'

function ProductsAdmin() {
    // const { accessToken } = useContext(CustomerContext);
    const [productsDisplay, setProducts] = useState([]);
    
    // Get all product
    const initProducts = () => {
         productService.getProducts(accessToken).then((products) => {
            setProducts(products.data);
        })
        .catch ((err) => {
            console.error(err);
        })
    }

    useEffect(() => {
        initProducts()
    }, []);

    // Delete product handler
    const deleteHandler = (id) => {
        try {
            productService.deleteProduct(id, accessToken)
            .then((response) => {
                console.log("Product delete succesfully");
                toast('Delete product successfully!', {
                    type: 'default'
                })
                initProducts();
            })

        } catch (err) {
            toast('Delete product fail!', {
                type: 'error'
            })
        }
    }

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>Product Management</h2>
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
                    <Link to = '/admin/add'>
                        <Button className={cx('add-btn')} outline target="_blank">
                            Add
                        </Button>
                    </Link>
                </div>
            </div>
            <table className={cx('table')}>
                <thead>
                    <tr className={cx('table-row')}>
                        <th className={cx('table-header')}>STT</th>
                        <th className={cx('table-header')}>Name</th>
                        <th className={cx('table-header')}>Categogy</th>
                        <th className={cx('table-header')}>Price</th>
                        <th className={cx('table-header')}>Action</th>
                    </tr>
                </thead>
                <tbody>
                {productsDisplay.map((product, counter) =>
                    <tr key={product.id} className={cx('table-row')}>
                        <td className={cx('table-data')}>{counter+1}</td>
                        <td className={cx('table-data')}>{product.name}</td>
                        <td className={cx('table-data')}>{product.category.name}</td>
                        <td className={cx('table-data')}>{product.price} VNĐ</td>
                        <td className={cx('table-data')}>
                            <Button 
                                onClick={() => {
                                deleteHandler(product.id);}}  
                                className={cx('delete')}>Delete
                            </Button>
                            <Button className={cx('update')}>Edit</Button> 
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default ProductsAdmin;
