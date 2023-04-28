import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Grid, Row, Column } from '~/components/Grid';

import SearchPills from './SearchPills';
import FilterSidebar from './FilterSidebar';
import OrderBy from './OrderBy';
import ProductsList from './ProductsList';

import { AppContext } from '~/AppContext';

import styles from './Products.module.scss';

import productService from '~/services/ProductService';

const cx = classNames.bind(styles);

function Products() {
    const { accessToken } = useContext(AppContext);
    const navigate = useNavigate();

    const [search, setSearch] = useState('');

    const [filteredGender, setFilteredGender] = useState('Both');
    const [filteredStatusIds, setFilteredStatusIds] = useState([]);
    const [filteredCategoryIds, setFilteredCategoryIds] = useState([]);
    const [filteredMaxPrice, setFilteredMaxPrice] = useState();
    const [filteredMinPrice, setFilteredMinPrice] = useState();

    const [products, setProducts] = useState([]);
    const [totalElements, setTotalElements] = useState();
    const [currentPage, setCurrentPage] = useState();
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        !accessToken && navigate('/signin');
    });

    useEffect(() => {
        let ignore = false;
        const fetchApi = async () => {
            const data = await productService.getProducts(accessToken);
            if (!ignore) {
                setTotalElements(data.totalElements);
                setCurrentPage(data.currentPage);
                setHasNextPage(data.hasNextPage);
                setProducts(data.data);
            }
        };
        !accessToken || fetchApi();

        return () => (ignore = true);
    }, [accessToken]);

    const loadMoreProducts = async () => {
        const data = await productService.getProductsWithPage(
            currentPage + 1,
            accessToken,
        );
        setCurrentPage(data.currentPage);
        setHasNextPage(data.hasNextPage);
        setProducts([...products, ...data.data]);
    };

    return (
        <div className={cx('container')}>
            <SearchPills search={search} setSearch={setSearch} />

            <Grid className={cx('products-body', 'wide')}>
                <Row className="gutter">
                    <Column className="l-3">
                        <FilterSidebar />
                    </Column>
                    <Column className="l-9">
                        <OrderBy totalElements={totalElements} />
                        <ProductsList
                            products={products}
                            hasNextPage={hasNextPage}
                            loadMoreProducts={loadMoreProducts}
                        />
                    </Column>
                </Row>
            </Grid>
        </div>
    );
}

export default Products;
