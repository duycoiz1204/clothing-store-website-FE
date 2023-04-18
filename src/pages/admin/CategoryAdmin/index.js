import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';

import Button from '~/components/Button';
import styles from './CategoryAdmin.module.scss';
import { useEffect, useState } from 'react';

import categoryService from '~/services/CategoryService';

const cx = classNames.bind(styles);

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0cm9uZ2R1YzA1MDMyMDAyQGdtYWlsLmNvbSIsImV4cCI6MTY4MTgzNDYyOCwiaWF0IjoxNjgxNzQ4MjI4LCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiQ1VTVE9NRVIifV19.tC9BippgBySpe8ilRD7sNflf_9y3zTr1H49dIJtcfKo'

function CategoryAdmin() {
    const [categories, setCategories] = useState([]);


    const initCategories = () => {
        categoryService.getAllCategory(accessToken).then((categories) => {
           setCategories(categories.data);
       })
       .catch ((err) => {
           console.error(err);
       })
   }
     
    useEffect(() => {
        initCategories()
    }, []);


    const deleteHandler = (id) => {
        try {
            categoryService.deleteCategory(id, accessToken)
            .then((response) => {
                console.log("Category delete succesfully");
                toast('Delete category successfully!', {
                    type: 'default'
                })
                initCategories()

            })
        } catch (err) {
            toast('Delete category fail!', {
                type: 'error'
            })
        }

    }
    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>Categogy Management</h2>
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
                        <th className={cx('table-header')}>Action</th>
                    </tr>
                </thead>
                <tbody>
                {categories.map((category, counter) =>
                    <tr key={category.id} className={cx('table-row')}>
                        <td className={cx('table-data')}>{counter+1}</td>
                        <td className={cx('table-data')}>{category.name}</td>
                        <td className={cx('table-data')}>
                            <Button 
                                onClick={() => {
                                deleteHandler(category.id)}}  
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

export default CategoryAdmin;
