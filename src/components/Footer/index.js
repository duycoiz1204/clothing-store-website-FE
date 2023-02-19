import classNames from 'classnames/bind';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';
import image from '~/assets/images/logo-large.png'
import { faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { Grid, Row, Column } from '~/components/Grid';

const cx = classNames.bind(styles);

function Footer() {
    return <div className={cx('container')}>
        <Grid className={cx('wide')}>
            <Row>
                <Column className={cx('l-4')}>
                    <div className={cx("content-left")}>
                        <div className={cx("content-link")}>
                            <a href="#">Home</a>
                            <a href="#">Product</a>
                            <a href="#">Promotion</a>
                        </div>
                        <h2 className={cx("heading")}>Information</h2>
                        <div className={cx("information")}>
                            <p>
                                19 Tran Xuan Soan, Ward 5, District 3, Ho Chi Minh City, Vietnam
                            </p> 
                            <p> 
                                0919011022
                            </p> 
                            <p> 
                                clothingstore@gmail.com
                            </p>
                        </div>
                    </div>
                </Column>
                <Column className= {cx("l-4")}>
                    <div className={cx("content-between")}>
                        <div className={cx("logo")}>
                            <img src={image} alt="" className={cx("img-logo")}></img>
                        </div>
                        <p className={cx("reserved")}>All rights reserved</p>
                    </div>
                </Column>
                <Column className={cx("l-4")}>
                    <div className={cx("content-right")}>
                        <div>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                            <a href="#">Items</a>
                        </div>
                        <h2 className={cx("heading")}>Social</h2>
                        <div className={cx("facebook-link")}>
                            <FontAwesomeIcon icon={faSquareFacebook} className={cx("icon-face")}/> 
                            <p className={cx("icon-block")}>
                                Facebook
                            </p>
                        </div>
                        <div className={cx("instagram-link")}> 
                            <FontAwesomeIcon icon={faSquareInstagram} className={cx("icon-instagram")}/>        
                            <p className={cx("icon-block")}>
                                Instagram
                            </p>
                        </div>
                    </div>
                </Column>
            </Row>
        </Grid>
    </div>
}

export default Footer;
