import classNames from 'classnames/bind';
import { Row, Column } from '~/components/Grid';

import styles from './FollowUs.module.scss';
import imageProduct from '~/assets/images/product.jpg';

const cx = classNames.bind(styles);

function FollowUs() {
    return (
        <div className={cx('container')}>
            <h2 className={cx('product_item-heading')}>
                Follow us on Instagram
            </h2>
            <div className={cx('product_item-small')}>
                <Row className={cx('gutter')}>
                    <Column className={cx('l-2')}>
                        <div className={cx('product_item')}>
                            <img
                                alt=""
                                src={imageProduct}
                                className={cx('product_item-img')}
                            ></img>
                        </div>
                    </Column>
                    <Column className={cx('l-2')}>
                        <div className={cx('product_item')}>
                            <img
                                alt=""
                                src={imageProduct}
                                className={cx('product_item-img')}
                            ></img>
                        </div>
                    </Column>
                    <Column className={cx('l-2')}>
                        <div className={cx('product_item')}>
                            <img
                                alt=""
                                src={imageProduct}
                                className={cx('product_item-img')}
                            ></img>
                        </div>
                    </Column>
                    <Column className={cx('l-2')}>
                        <div className={cx('product_item')}>
                            <img
                                alt=""
                                src={imageProduct}
                                className={cx('product_item-img')}
                            ></img>
                        </div>
                    </Column>
                    <Column className={cx('l-2')}>
                        <div className={cx('product_item')}>
                            <img
                                alt=""
                                src={imageProduct}
                                className={cx('product_item-img')}
                            ></img>
                        </div>
                    </Column>
                    <Column className={cx('l-2')}>
                        <div className={cx('product_item')}>
                            <img
                                alt=""
                                src={imageProduct}
                                className={cx('product_item-img')}
                            ></img>
                        </div>
                    </Column>
                </Row>
            </div>
        </div>
    );
}

export default FollowUs;
