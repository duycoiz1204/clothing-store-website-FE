import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './AddProduct.module.scss'
import { useEffect, useState } from 'react';
import Select from 'react-select';

import productService from '~/services/ProductService';
import { Grid } from '~/components/Grid';
import Input from '~/components/Input';

const cx = classNames.bind(styles);

function AddProduct() {
    return (
        <div className={cx('container')}>
         <h1 className={cx('heading')}>Add new product</h1>
            <Grid className={cx('wide')}>
                <div className={cx('form-block')}>
                    <form method="post">
                        <div className={cx('name-product')}>
                            <label>Product name: </label>
                            <Input></Input>
                        </div>
                        <div className={cx('name-product')}>
                            <label>Product price: </label>
                            <Input type="number"></Input>
                        </div>
                        <div className={cx('name-product')}>
                            <label>Product discount: </label>
                            <Input type="number"></Input>
                        </div>
                        <div className={cx('name-product')}>
                            <label>Product category: </label>
                            <Select options={category}></Select>
                        </div>
                        <div className={cx('name-product')}>
                            <label>Product brand: </label>
                            <Select options={brand}></Select>
                        </div>
                        <div className={cx('name-product')}>
                            <label>Product inteneded for: </label>
                            <Input></Input>
                        </div>
                        <div className={cx('name-product')}>
                            <label>Product name: </label>
                            <Input></Input>
                        </div>
                        <Button primary className={cx('btn-add')}>Add</Button>
                    </form>
                </div>
            </Grid>
        </div>
    )
}

export default AddProduct;

const category = [
    { value: 'quan', label: 'Quần' },
    { value: 'ao', label: 'Áo' },
    { value: 'aokhoac', label: 'Áo Khoác' }
  ]

const brand = [
    { value: 'hot', label: 'Hot' },
    { value: 'new', label: 'New' },
    { value: 'sold', label: 'Sold' }
  ]