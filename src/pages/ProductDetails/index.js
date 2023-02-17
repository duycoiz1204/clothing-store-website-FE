import classNames from 'classnames/bind';

import { Grid, Row, Column } from '~/components/Grid';

import styles from './ProductDetails.module.scss';

import PageSite from './PageSite';
import ImageDisplay from './ImageDisplay';
import ProductInfo from './ProductInfo';
import ProductsSlider from '../../components/ProductsSlider';

const cx = classNames.bind(styles);

function ProductDetails() {
    return (
        <div className={cx('container')}>
            <Grid className="wide">
                <PageSite />

                <Row className={cx('content')}>
                    <Column className="l-5">
                        <ImageDisplay />
                    </Column>
                    <Column className="l-7">
                        <ProductInfo />
                    </Column>
                </Row>

                <ProductsSlider title="Other Products" />
            </Grid>
        </div>
    );
}

export default ProductDetails;
