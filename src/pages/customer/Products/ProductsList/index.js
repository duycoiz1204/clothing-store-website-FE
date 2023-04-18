import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { Grid, Row, Column } from '~/components/Grid';
import Button from '~/components/Button';
import ProductItem from '~/components/ProductItem';

import styles from './ProductsList.module.scss';

const cx = classNames.bind(styles);

function ProductsList({ products, hasNextPage, loadMoreProducts }) {
    return (
        <div className={cx('container')}>
            <Grid>
                <Row className="gutter">
                    {products.map((product, index) => (
                        <Column key={index} className={cx('column', 'l-4')}>
                            <Link to={`/products/${product.id}`}>
                                <ProductItem product={product} />
                            </Link>
                        </Column>
                    ))}
                </Row>
            </Grid>
            {hasNextPage && (
                <Button
                    className={cx('load-btn')}
                    primary
                    small
                    leftIcon={<FontAwesomeIcon icon={faSpinner} />}
                    onClick={loadMoreProducts}
                >
                    Load more
                </Button>
            )}
        </div>
    );
}

export default ProductsList;
