import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Grid, Row, Column } from '~/components/Grid';
import image from '~/assets/images/img-home-background.jpg';
import imageProduct from '~/assets/images/product.jpg';
import button from '~/components/Button';
const cx = classNames.bind(styles);

function Home() {
    return <div className={cx('home')}>
        <Grid className={cx('wide')}>
            <Row>
                <Column className={cx('l-12')}>
                    <div className={cx('container')}>
                        <div className={cx('block-img')}>
                            <img  alt="" className={cx('img-background')} src={image}></img>
                        </div>

                        {/* Item Large */}

                        <div className={cx('main-item')}>
                            <h2 className={cx('heading-item')}>Featured Products</h2>
                            <Row>
                                <Column className={cx('l-3')}>
                                    <div className={cx('first-item')}>
                                        <div className={cx('top-content')}>
                                            <img alt="" className={cx('img-item')} src={imageProduct}></img>
                                        </div>
                                        <div className={cx('bottom-content')}>
                                            <p>Product name</p>
                                            <div className={cx('price-status')}>
                                                <div>
                                                    <p className={cx('price')}>250.000đ</p>
                                                </div>
                                                <div>
                                                    <p className={cx('status')}>Stocking</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Column>
                                <Column className={cx('l-3')}>
                                    <div className={cx('first-item')}>
                                            <div className={cx('top-content')}>
                                                <img alt="" className={cx('img-item')} src={imageProduct}></img>
                                            </div>
                                            <div className={cx('bottom-content')}>
                                            <p>Product name</p>
                                            <div className={cx('price-status')}>
                                                <div>
                                                    <p className={cx('price')}>250.000đ</p>
                                                </div>
                                                <div>
                                                    <p className={cx('status')}>Stocking</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Column>
                                <Column className={cx('l-3')}>
                                    <div className={cx('first-item')}>
                                        <div className={cx('top-content')}>
                                            <img alt="" className={cx('img-item')} src={imageProduct}></img>
                                        </div>
                                        <div className={cx('bottom-content')}>
                                            <p>Product name</p>
                                            <div className={cx('price-status')}>
                                                <div>
                                                    <p className={cx('price')}>250.000đ</p>
                                                </div>
                                                <div>
                                                    <p className={cx('status')}>Stocking</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                
                                </Column>
                                <Column className={cx('l-3')}>
                                    <div className={cx('first-item')}>
                                        <div className={cx('top-content')}>
                                            <img alt="" className={cx('img-item')} src={imageProduct}></img>
                                        </div>
                                        <div className={cx('bottom-content')}>
                                            <p>Product name</p>
                                            <div className={cx('price-status')}>
                                                <div>
                                                    <p className={cx('price')}>250.000đ</p>
                                                </div>
                                                <div>
                                                    <p className={cx('status')}>Stocking</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>        
                                </Column>
                            </Row>
                        </div>

                        {/* Item Small */}

                        <div className={cx('product_item-small')}>
                            <h2 className={cx('product_item-heading')}>Follow us on Instagram</h2>
                            <Row>
                                <Column className={cx('l-2')}>
                                    <div className={cx('product_item')}>
                                        <img alt="" src={imageProduct} className={cx('product_item-img')}></img>
                                    </div>
                                </Column>
                                <Column className={cx('l-2')}>
                                    <div className={cx('product_item')}>
                                        <img alt="" src={imageProduct} className={cx('product_item-img')}></img>
                                    </div>
                                </Column>
                                <Column className={cx('l-2')}>
                                    <div className={cx('product_item')}>
                                        <img alt="" src={imageProduct} className={cx('product_item-img')}></img>
                                    </div>
                                </Column>
                                <Column className={cx('l-2')}>
                                    <div className={cx('product_item')}>
                                        <img alt="" src={imageProduct} className={cx('product_item-img')}></img>
                                    </div>
                                </Column>
                                <Column className={cx('l-2')}>
                                    <div className={cx('product_item')}>
                                        <img alt="" src={imageProduct} className={cx('product_item-img')}></img>
                                    </div>
                                </Column>
                                <Column className={cx('l-2')}>
                                    <div className={cx('product_item')}>
                                        <img alt="" src={imageProduct} className={cx('product_item-img')}></img>
                                    </div>
                                </Column>
                            </Row>
                        </div>

                        {/* Item Input */}
                        <div className={cx('email_register')}>
                            <h2 className={cx('heading-item')}>Register Email</h2>
                            <p className={cx('note_heading')}>to receive promotions of our store</p>
                            <Row>
                                <Column className={cx('l-4')}>

                                </Column>
                                 <Column className={cx('l-4')}>
                                    <form>
                                        <input  type="text" className={cx('email_input')} placeholder='Please enter your email'></input>
                                        <button type="submit" className={cx('btn_submit')} onClick="">Submit</button>
                                    </form>
                                </Column>
                                <Column className={cx('l-4')}>

                                </Column>
                            </Row>
                        </div>
                    </div>
                </Column>
            </Row>
        </Grid>
    </div>;
}

export default Home;
