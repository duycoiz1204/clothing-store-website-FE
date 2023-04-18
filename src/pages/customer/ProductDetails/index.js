import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Grid, Row, Column } from '~/components/Grid';

import { CustomerContext } from '~/contexts/Customer/CustomerContext';

import PageSite from './PageSite';
import ImageDisplay from './ImageDisplay';
import ProductInfo from './ProductInfo';
import ProductsSlider from '~/components/ProductsSlider';

import styles from './ProductDetails.module.scss';

import productService from '~/services/ProductService';

const cx = classNames.bind(styles);

function ProductDetails() {
    const [product, setProduct] = useState();
    const [otherProducts, setOtherProducts] = useState([]);
    // const { accessToken } = useContext(CustomerContext);
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0cm9uZ2R1YzA1MDMyMDAyQGdtYWlsLmNvbSIsImV4cCI6MTY4MTgzNDYyOCwiaWF0IjoxNjgxNzQ4MjI4LCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiQ1VTVE9NRVIifV19.tC9BippgBySpe8ilRD7sNflf_9y3zTr1H49dIJtcfKo'

    const { id } = useParams();

    // Get product details & other products
    useEffect(() => {
        let ignore = false;

        const fetchProduct = async () => {
            const data = await productService.getProduct(id, accessToken);
            if (!ignore) {
                setProduct(data);
            }
        };
        !product && fetchProduct();

        const fetchProducts = async () => {
            const data = await productService.getProducts(accessToken);
            if (!ignore) {
                setOtherProducts(data.data);
            }
        };
        !otherProducts.length && fetchProducts();

        return () => (ignore = true);
    }, [product, otherProducts, id, accessToken]);

    return (
        product && (
            <div className={cx('container')}>
                <Grid className="wide">
                    <PageSite productName={product.name} />
                    <Row className={cx('content')}>
                        <Column className="l-5">
                            {product?.productImages && (
                                <ImageDisplay product={product} />
                            )}
                        </Column>
                        <Column className="l-7">
                            <ProductInfo product={product} />
                        </Column>
                    </Row>

                    <ProductsSlider title="Other Products" products={otherProducts} />
                </Grid>
            </div>
        )
    );
}

export default ProductDetails;
