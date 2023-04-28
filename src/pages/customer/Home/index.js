import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Grid } from '~/components/Grid';

import styles from './Home.module.scss';
import image from '~/assets/images/img-home-background.jpg';
import ProductsSlider from '~/components/ProductsSlider';
import productService from '~/services/ProductService';

import FollowUs from './FollowUs';
import EmailRegister from './EmailRegister';

import { AppContext } from '~/AppContext';

const cx = classNames.bind(styles);

function Home() {
    const { accessToken } = useContext(AppContext);
    const navigate = useNavigate();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        !accessToken && navigate('/signin');
    });

    // Get all product
    const initProducts = () => {
        productService
            .getProducts(accessToken)
            .then((products) => {
                setProduct(products.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    useEffect(() => {
        initProducts();
    }, []);
    return (
        <div className={cx('container')}>
            <Grid className={cx('wide')}>
                <div className={cx('block-img')}>
                    <img
                        alt=""
                        className={cx('img-background')}
                        src={image}
                    ></img>
                </div>

                <ProductsSlider title="Featured Products" products={product} />

                <FollowUs />

                {/* Item Input */}
                <EmailRegister />
            </Grid>
        </div>
    );
}

export default Home;
