import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import { Grid } from '~/components/Grid';
import Button from '~/components/Button';

import styles from './Header.module.scss';
import image from '~/assets/images/logo.png';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('container')}>
            <Grid className={cx('wide')}>
                <div className={cx('content')}>
                    <div className={cx('left-content')}>
                        <div className={cx('logo')}>
                            <img
                                className={cx('img-logo')}
                                src={image}
                                alt=""
                            ></img>
                        </div>
                        <li className={cx('text-item')}>
                            <Link to="/about">About</Link>
                        </li>
                        <li className={cx('text-item')}>
                            <Link to="/products">Products</Link>
                        </li>
                        <li className={cx('text-item')}>
                            <Link to="/best_sellers">Best sellers</Link>
                        </li>
                        <li className={cx('text-item')}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </div>
                    <div className={cx('right-content')}>
                        <Button primary>Login</Button>
                        <Button primary>Sign Up</Button>
                        {/* <div className={cx('cart-icon')}>
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className={cx('icon')}
                            />
                        </div> */}
                        <Link className={cx('link')} to="/cart">
                            <div className={cx('cart-icon')}>
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                    className={cx('icon')}
                                />
                            </div>
                        </Link>

                    </div>
                </div>
            </Grid>
        </div>
    );
}

export default Header;
