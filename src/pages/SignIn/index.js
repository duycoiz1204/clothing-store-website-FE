import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';

import { Column } from '~/components/Grid';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import logo from '~/assets/images/logo-large.png';
import signIn from '~/assets/images/backgroundSignIn.png';




const cx = classNames.bind(styles);

function SignIn() {
    return (
        <div >
            <div className={cx('background')}>
                <img
                    className={cx('img-background')}
                    src={signIn}
                    alt=""
                ></img>
            </div>
            <div className={cx('formSignIn')}  >
                <div className={cx('logo')}>
                    <img
                        className={cx('img-logo')}
                        src={logo}
                        alt=""
                    ></img>
                </div>
                <div>
                    <div className={cx('anh-tuyen')} >
                        <div className={cx('row')}>
                            <span className={cx('sign-in')}>Sign in</span>
                        </div>
                        <div className={cx('title')}>
                            <span>Hey, Enter your details to get sign in to your account</span>
                        </div>
                        <div className={cx('content')}>
                            <span>Email</span>
                        </div>
                        <div className={cx('row')}>
                            <input className={cx('inp-text')} type={'text'} placeholder={'Enter your email'}></input>
                        </div>
                        <div className={cx('content')}>
                            <span>Password</span>
                        </div>
                        <div className={cx('row')}>
                            <input className={cx('inp-text')} type={'text'} placeholder={'Enter your password'}></input>
                        </div>
                        <div className={cx('content')}>
                            <input type={'checkbox'}></input>
                            <span className={cx('Remember-magin')} >Remember me</span>
                            <li className={cx('content-right')}>
                                <Link to="">Forgot password?</Link>
                            </li>
                        </div>
                        <div className={cx('row')}>
                            <Button className={cx('btn-signIn')} >Sign in</Button>
                        </div>
                        <div className={cx('row-line')}>
                            <Column className={cx('line')}>
                                <hr color={'#7286D3'} width={'180px'} />
                            </Column>
                            <Column>
                                <span>or</span>
                            </Column>
                            <Column className={cx('line')}>
                                <hr color={'#7286D3'} width={'180px'} />
                            </Column>
                        </div>
                        <div className={cx('row')}>
                            <Button className={cx('btn-facebook')}>Google</Button>
                            <Button className={cx('btn-facebook')}>Facebook</Button>
                        </div>
                        <div className={cx('row-mini-title')}>
                            <li className={cx('mini-title')} >Don’t have an account? <Link to="/signup"> Sign up</Link></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
