import classNames from 'classnames/bind';
import styles from "./Promotion.module.scss";
import {Link} from "react-router-dom"
import Button from '~/components/Button';
import images from '~/assets/images/voucher.png'
import images1 from '~/assets/images/user_promotion.png'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram} from '@fortawesome/free-brands-svg-icons';
import { Grid, Row, Column } from '~/components/Grid';


const cx = classNames.bind(styles);

function Promotion() {
    return <div className= {cx('container')}>
        <Grid className= {cx('wide')}>
            <Row>
                    <Column className= {cx('l-4')}>
                        <div className= {cx('user-block')}>
                            <div className= {cx('img_user-block')}>
                                <img alt ="" src={images1} className= {cx('user-image')}></img>
                            </div>
                            <h2 className= {cx('heading')}>Username/Promotion</h2>
                        </div>
                        <div className= {cx('content_left')}>
                            <div className= {cx('item-icon')}>
                                <FontAwesomeIcon icon={faSquareFacebook} className={cx("icon-face icon")}/> 
                                <Link to="#" className= {cx("link-icon")}>Profile</Link>
                            </div>
                            <div className= {cx('item-icon')}>
                                <FontAwesomeIcon icon={faSquareFacebook} className={cx("icon-face icon")}/> 
                                <Link to="#" className= {cx("link-icon")}>Change Password</Link>
                            </div>
                            <div className= {cx('item-icon')}>
                                <FontAwesomeIcon icon={faSquareFacebook} className={cx("icon-face icon")}/> 
                                <Link to="#" className= {cx("link-icon")}>Promotion</Link>

                            </div>
                            <div className= {cx('item-icon')}>
                                <FontAwesomeIcon icon={faSquareFacebook} className={cx("icon-face icon")}/> 
                                <Link to="#" className= {cx("link-icon")}>Order History</Link>

                            </div>
                            <p className= {cx("line")}></p>
                            <div className= {cx('item-icon')}>
                                <FontAwesomeIcon icon={faSquareFacebook} className={cx("icon-face icon")}/> 
                                <Link to="#" className= {cx("link-icon")}>Logout</Link>
                            </div>          
                        </div> 
                    </Column>
                    <Column className= {cx('l-8')}>
                        <div className= {cx('found-item')}>
                            <div className= {cx('text-found')}>
                                <p>Found 100 items</p>
                            </div>
                            <div className= {cx('text-btn')}>
                                <div className= {cx('text-sort')}>
                                    <p className= {cx('text-sortby')}>Sort by</p>
                                </div>
                                <div>
                                    <Button primary className= {cx('btn-newviral')} large></Button>
                                </div>
                            </div>
                        </div>
                        <div className= {cx('product_item')}>
                            <div className= {cx('img-block')}>
                                <img alt= "" src={images} className= {cx('image')}></img>
                            </div>
                            <div className= {cx('item-content')}>
                                <div className= {cx('item-left')}>
                                    <h4 className= {cx('item-title')}>10% Discount</h4>
                                    <p className= {cx('item-voucher')}>Voucher is valid for orders of at least $20. </p>
                                    <p className= {cx('item-expiry')}>Expiry date: 15.05.2023</p>
                                </div>
                                <div className= {cx('btn-apply')}>
                                    <Button primary/>
                                </div>
                            </div>
                        </div>
                        <div className= {cx('product_item')}>
                            <div className= {cx('img-block')}>
                                <img alt= "" src={images} className= {cx('image')}></img>
                            </div>
                            <div className= {cx('item-content')}>
                                <div className= {cx('item-left')}>
                                    <h4 className= {cx('item-title')}>10% Discount</h4>
                                    <p className= {cx('item-voucher')}>Voucher is valid for orders of at least $20. </p>
                                    <p className= {cx('item-expiry')}>Expiry date: 15.05.2023</p>
                                </div>
                                <div className= {cx('btn-apply')}>
                                    <Button primary/>
                                </div>
                            </div>
                        </div>
                        <div className= {cx('product_item')}>
                            <div className= {cx('img-block')}>
                                <img alt= "" src={images} className= {cx('image')}></img>
                            </div>
                            <div className= {cx('item-content')}>
                                <div className= {cx('item-left')}>
                                    <h4 className= {cx('item-title')}>10% Discount</h4>
                                    <p className= {cx('item-voucher')}>Voucher is valid for orders of at least $20. </p>
                                    <p className= {cx('item-expiry')}>Expiry date: 15.05.2023</p>
                                </div>
                                <div className= {cx('btn-apply')}>
                                    <Button primary/>
                                </div>
                            </div>
                        </div>
                    </Column>
            </Row>
        </Grid>

    </div>
}

export default Promotion;