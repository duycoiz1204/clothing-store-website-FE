import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import { CustomerContext } from '~/contexts/Customer/CustomerContext';

import { Column } from '~/components/Grid';
import Button from '~/components/Button';

import styles from './SignIn.module.scss';
import logo from '~/assets/images/logo-large.png';
import signIn from '~/assets/images/backgroundSignIn.png';

import authService from '~/services/AuthService';

const cx = classNames.bind(styles);

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { accessToken, saveCredentials } = useContext(CustomerContext);
    const navigate = useNavigate();

    // Navigate user if logged in
    useEffect(() => {
        accessToken && navigate('/');
    }, [accessToken, navigate]);

    // Handle click sing in button
    const handleClickSignIn = async () => {
        const credentials = await authService.login({ email, password });
        saveCredentials(credentials);
        navigate('/');
    };

    return (
        <div>
            <div className={cx('background')}>
                <img className={cx('img-background')} src={signIn} alt=""></img>
            </div>
            <div className={cx('formSignIn')}>
                <div className={cx('logo')}>
                    <img className={cx('img-logo')} src={logo} alt=""></img>
                </div>
                <div>
                    <div className={cx('anh-tuyen')}>
                        <div className={cx('row')}>
                            <span className={cx('sign-in')}>Sign in</span>
                        </div>
                        <div className={cx('title')}>
                            <span>
                                Hey, Enter your details to get sign in to your
                                account
                            </span>
                        </div>
                        <div className={cx('content')}>
                            <span>Email</span>
                        </div>
                        <div className={cx('row')}>
                            <input
                                className={cx('inp-text')}
                                type="text"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className={cx('content')}>
                            <span>Password</span>
                        </div>
                        <div className={cx('row')}>
                            <input
                                className={cx('inp-text')}
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <div className={cx('content')}>
                            <input type={'checkbox'}></input>
                            <span className={cx('Remember-magin')}>
                                Remember me
                            </span>
                            <li className={cx('content-right')}>
                                <Link to="">Forgot password?</Link>
                            </li>
                        </div>
                        <div className={cx('row')}>
                            <Button
                                className={cx('btn-signIn')}
                                onClick={handleClickSignIn}
                            >
                                Sign in
                            </Button>
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
                            <Button className={cx('btn-facebook')}>
                                Google
                            </Button>
                            <Button className={cx('btn-facebook')}>
                                Facebook
                            </Button>
                        </div>
                        <div className={cx('row-mini-title')}>
                            <li className={cx('mini-title')}>
                                Don’t have an account?{' '}
                                <Link to="/signup"> Sign up</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
