import classNames from 'classnames/bind';
import { Row, Column } from '~/components/Grid';

import styles from './EmailRegister.module.scss';

const cx = classNames.bind(styles);

function EmailRegister() {
    return (
        <div className={cx('container')}>
        <h2 className={cx('heading-item')}>Register Email</h2>
        <p className={cx('note_heading')}>
            to receive promotions of our store
        </p>
        <Row>
            <Column className={cx('l-4')}></Column>
            <Column className={cx('l-4')}>
                <form className={cx('form')}>
                    <input
                        type="text"
                        className={cx('email_input')}
                        placeholder="Please enter your email"
                    ></input>
                    <button
                        type="submit"
                        className={cx('btn_submit')}
                        onClick=""
                    >
                        Submit
                    </button>
                </form>
            </Column>
            <Column className={cx('l-4')}></Column>
        </Row>
    </div>
		);
}

export default EmailRegister;