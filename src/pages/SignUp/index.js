import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';

import { Column } from '~/components/Grid';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import signUp from '~/assets/images/backgroundSignUp.png';
import logo from '~/assets/images/logo-large.png';


const cx = classNames.bind(styles);

function SignUp() {
    return (
        <div >
            <div className={cx('background')}>
                <img
                    className={cx('img-background')}
                    src={signUp}
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
                    <span className={cx('sign-in')}>Sign up</span>
                </div>
                <div className={cx('title')}>
                    <span>Enter the fields below to get started</span>
                </div>
                <div className={cx('content')}>
                    <span>Full name*</span>
                </div>
                <div className={cx('row')}>
                    <input className={cx('inp-text')} type={'text'} placeholder={'Enter your name'}></input>
                </div>
                <div className={cx('content')}>
                    <span>Email*</span>
                </div>
                <div className={cx('row')}>
                    <input className={cx('inp-text')} type={'text'} placeholder={'Enter your email'}></input>
                </div>
                <div className={cx('content')}>
                    <span>Phone*</span>
                </div>
                <div className={cx('row')}>
                    <input className={cx('inp-text')} type={'text'} placeholder={'Enter your phone'}></input>
                </div>
                <div className={cx('content')}>
                    <span>Password*</span>
                </div>
                <div className={cx('row')}>
                    <input className={cx('inp-text')} type={'text'} placeholder={'Enter your password'}></input>
                </div>
                <div className={cx('row')}>
                    <Button className={cx('btn-signIn')} >Sign up</Button>
                </div>
                <div className={cx('row-line')}>
                    <Column className={cx('line')}>
                        <hr color={'#7286D3'} width={'121px'} />
                    </Column>
                    <Column>
                        <span className={cx('font-color')} >Or Sign in with</span>
                    </Column>
                    <Column className={cx('line')}>
                        <hr color={'#7286D3'} width={'121px'} />
                    </Column>
                </div>
                <div className={cx('row')}>
                    <Button className={cx('btn-facebook')}>Sign in</Button>
                    <Button className={cx('btn-facebook')}>Sign in</Button>
                </div>
                <div className={cx('row-mini-title')}>
                    <span className={cx('mini-title')} >Already have an account? <Link className={cx('font-color')} to="/signin"> Sign in</Link></span>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
