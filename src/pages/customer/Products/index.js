import classNames from 'classnames/bind';

import { Grid, Row, Column } from '~/components/Grid';

import SearchPills from './SearchPills';
import FilterSidebar from './FilterSidebar';
import OrderBy from './OrderBy';
import ProductsList from './ProductsList';

import styles from './Products.module.scss';

const cx = classNames.bind(styles);

function Products() {
    return (
        <div className={cx('container')}>
            <SearchPills />

            <Grid className={cx('products-body', 'wide')}>
                <Row className="gutter">
                    <Column className="l-3">
                        <FilterSidebar />
                    </Column>
                    <Column className="l-9">
                        <OrderBy />
                        <ProductsList />
                    </Column>
                </Row>
            </Grid>
        </div>
    );
}

export default Products;
