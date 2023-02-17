import classNames from 'classnames/bind';

import styles from './Header.module.scss';

import image from '~/assets/images/logo.png'

import { Grid, Row, Column } from '~/components/Grid'

const cx = classNames.bind(styles);

function Header() {
    return <div className={cx('container')}>
        <Grid className={cx('wide')}>
             <Row>
                <Column className={cx('l-5')}>
                    <div className={cx("left-content")}>
                        <div className={cx("logo")}>
                            <img className={cx("img-logo")} src={image} alt=""></img>
                        </div>
                        <li className={cx("text-item")}>
                            <a href="#">About</a>
                        </li>
                        <li className={cx("text-item")}>
                            <a href="#">Product</a>
                        </li>
                        <li className={cx("text-item")}>
                            <a href="#">Best sellers</a>
                        </li>
                        <li className={cx("text-item")}>
                            <a href="#">Contact</a>
                        </li>
                    </div>
                </Column>
                <Column className={cx("l-3")}></Column>
                <Column className={cx("l-4")}>
                    <div className={cx("right-content")}>
                        <div className="">
                            <button className={cx("btn")}>Login</button>
                        </div>
                        <div className="">
                            <button className={cx("btn")}>Sign Up</button>
                        </div>
                        <div className={cx("cart-icon")}>
                            <span><i className={cx("fa-solid fa-cart-shopping  icon")}></i></span>
                        </div>
                    </div>

                </Column>
            </Row>
        </Grid>
    </div>;
}

export default Header;
