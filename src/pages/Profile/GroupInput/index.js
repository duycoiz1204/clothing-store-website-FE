import { Row, Column } from '~/components/Grid';
import classNames from 'classnames/bind';

import Input from '~/components/Input';

import styles from './GroupInput.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function GroupInput() {
    return (
        <div className={cx('container')}>
            <Row className={cx('sgutter')}>
                <Column className={cx('col', 'l-6')}>
                    <VerticalInputGroup
                        title="Full name"
                        placeholder="Enter your full name"
                    />
                </Column>
                <Column className={cx('col', 'l-6')}>
                    <VerticalInputGroup
                        title="Birthday"
                        placeholder="Enter your birth date"
                    />
                </Column>
                <Column className={cx('col', 'l-6')}>
                    <VerticalInputGroup
                        title="Email"
                        placeholder="Enter your email"
                    />
                </Column>
                <Column className={cx('col', 'l-6')}>
                    <VerticalInputGroup
                        title="Phone"
                        placeholder="Enter your phone"
                    />
                </Column>
                <Column className={cx('col', 'l-12')}>
                    <VerticalCheckboxGroup title="Gender" />
                </Column>
                <Column className={cx('col', 'l-12')}>
                    <VerticalSelectGroup title="Address" />
                </Column>
                <Column className={cx('col', 'controls', 'l-12')}>
                    <Button outline>Cancel</Button>
                    <Button primary>Save Profile</Button>
                </Column>
            </Row>
        </div>
    );
}

export default GroupInput;

function VerticalInputGroup({ title, placeholder }) {
    return (
        <div className={cx('container')}>
            <h4 className={cx('title')}>{title}</h4>
            <Input type="text" placeholder={placeholder} />
        </div>
    );
}

function VerticalCheckboxGroup({ title }) {
    return (
        <div className={cx('container')}>
            <h4 className={cx('title')}>{title}</h4>
            <div className={cx('groups')}>
                <div className={cx('group')}>
                    <input type="radio" id="male" className={cx('radio')} />
                    <label for="male">Male</label>
                </div>
                <div className={cx('group')}>
                    <input type="radio" id="female" className={cx('radio')} />
                    <label for="female">Female</label>
                </div>
            </div>
        </div>
    );
}

function VerticalSelectGroup({ title }) {
    return (
        <div className={cx('container')}>
            <h4 className={cx('title')}>{title}</h4>
            <select className={cx('select')}>
                <option className={cx('option')} defaultValue>
                    308, Nguyen Thi Thap, Ward 2, District 2, HCM City, Vietnam
                </option>
            </select>
            <div className={cx('add')}>Add another address</div>
        </div>
    );
}
