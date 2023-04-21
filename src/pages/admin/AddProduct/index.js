import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './AddProduct.module.scss'
import { useEffect, useState } from 'react';
import Select from '~/components/Select';
import { toast } from 'react-toastify';

import productService from '~/services/ProductService';
import statusService from '~/services/StatusService';
import categoryService from '~/services/CategoryService';

import { Grid } from '~/components/Grid';
import Input from '~/components/Input';

const cx = classNames.bind(styles);
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0cm9uZ2R1YzA1MDMyMDAyQGdtYWlsLmNvbSIsImV4cCI6MTY4MjA2MTk4OCwiaWF0IjoxNjgxOTc1NTg4LCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiQ1VTVE9NRVIifV19.UNUxefMdvSoBdH2Au0bUAvaRgJiPj_8XPDoJ4Y3UOVQ'


function AddProduct() {

    const[name, setName] = useState('');
    const[price, setPrice] = useState('');
    const[description, setDescription] = useState('');
    const[percentageDiscount, setPercentageDiscount] = useState('');
    const[amountDiscount, setAmountDiscount] = useState('');
    const[intendedFor, setIntendedFor] = useState('');
    const[files, setFiles] = useState('');
    const [selectedCategoryId, setCategoryId] = useState();
    const [selectedStatusId, setStatusId] = useState();

    const [status, setStatus] = useState([])
    const [category, setCategories] = useState([])


    const initCategories = () => {
        categoryService.getAllCategory(accessToken).then((categories) => {
           setCategories(categories.data);
       })
       .catch ((err) => {
           console.error(err);
       })
   }

   const initStatus = () => {
    statusService.getAllStatus(accessToken).then((statuses) => {
        setStatus(statuses.data);
    })
   .catch ((err) => {
       console.error(err);
   })
}
     
   useEffect(() => {
    initCategories()
    initStatus()
    }, [accessToken]);

      const handleUploadClick = event => {
        let file = event.target.files[0];
        const imageData = new FormData();
        imageData.append('imageFile', file);
        setFiles(imageData);
    };
    const saveProduct = (e) => {
        try {
        e.preventDefault();
        const product = {name, description, price, percentageDiscount, amountDiscount, selectedCategoryId, selectedStatusId, intendedFor, files};
        console.log(product);
            productService.addProduct(product, accessToken);
            toast('Add product successfully!', {
                type: 'success'
            })
        } catch(error) {
                toast('Add product fail!', {
                    type: 'error'
                })
            }
        }

        useEffect(() => {
            initCategories()
        }, []);    
    
    return (
        <div className={cx('container')}>
         <h1 className={cx('heading')}>Add new product</h1>
            <Grid className={cx('wide')}>
                <div className={cx('form-block')}>
                    <form>
                        <div className={cx('name-product')}>
                            <label>Product name: </label>
                            <Input
                            type= "text"
                                placeholder="Nhập tên sản phẩm"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                >
                            </Input>
                        </div>
                        <div className={cx('name-product')}>
                            <label>Product price: </label>
                            <Input  type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                            ></Input>
                        </div>
                        <div className={cx('name-product')}>
                            <label>Product description: </label>
                            <Input 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type="text">

                            </Input>
                        </div>
                        <div className={cx('name-product')}>
                            <label>Product category: </label>
                            <Select
                                 options={category} 
                                selected={selectedCategoryId}
                                onChange={(e) => setCategoryId(e.target.value)}
                            ></Select>
                        </div>
                        <div className={cx('name-product')}>
                            <label>Product status: </label>
                            <Select 
                                    options={status}
                                    selected={selectedStatusId}
                                    onChange={(e) => setStatusId(e.target.value)}

                             ></Select>
                        </div>
                        <div className={cx('name-product')}>
                            <label>Product inteneded for: </label>
                            <Input type="text"
                                value={intendedFor}
                                onChange={(e) => setIntendedFor(e.target.value)}></Input>
                        </div>
                        <div className={cx('name-product')}>
                            <label>Product Percentage Discount: </label>
                            <Input 
                                value={percentageDiscount}
                                onChange={(e) => setPercentageDiscount(e.target.value)}
                                type="number">
                            </Input>
                        </div>

                        <div className={cx('name-product')}>
                            <label>Amount Discount: </label>
                            <Input 
                                type="number"
                                value={amountDiscount}
                                onChange={(e) => setAmountDiscount(e.target.value)}></Input>
                        </div>

                        <div className={cx('name-product')}>
                            <label>Image Product: </label>
                            <Input type="file"
                                onChange= {handleUploadClick}>
                            </Input>
                        </div>
                        <Button primary className={cx('btn-add')} onClick={(e) => saveProduct(e)}>Add</Button>
                    </form>
                </div>
            </Grid>
        </div>
    )
}

export default AddProduct;
