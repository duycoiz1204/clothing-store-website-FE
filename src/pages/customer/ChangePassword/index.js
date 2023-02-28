import classNames from 'classnames/bind';
import { Column, Row } from '~/components/Grid';

import Button from '~/components/Button';
import VerticalInputGroup from '~/components/VerticalInputGroup';

import styles from './ChangePassword.module.scss';

const cx = classNames.bind(styles);

function ChangePassword() {
    return (
        <div className={cx('container')}>
            <div className={cx('title-bar')}>
                <h2 className={cx('title')}>Change Password</h2>
                <span className={cx('subtitle')}>
                    For account security, please do not share your password with
                    others
                </span>
            </div>
            <Row className={cx('gutter')}>
                <Column className={cx('col', 'l-10')}>
                    <VerticalInputGroup
                        title="Password"
                        placeholder="Enter your password"
                    />
                </Column>
                <Column className={cx('col', 'l-10')}>
                    <VerticalInputGroup
                        title="New Password"
                        placeholder="Enter your new password"
                    />
                </Column>
                <Column className={cx('col', 'l-10')}>
                    <VerticalInputGroup
                        title="Confirm Password"
                        placeholder="Confirm your new password"
                    />
                </Column>
            </Row>
            <Column className={cx('col', 'controls', 'l-10')}>
                <Button outline>Cancel</Button>
                <Button primary>Change</Button>
            </Column>
        </div>
    );
}

export default ChangePassword;
