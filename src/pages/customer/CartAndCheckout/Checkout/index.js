import { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import { toast } from 'react-toastify';
import styles from './Checkout.module.scss';
import Button from '~/components/Button';
import { Column, Row } from '~/components/Grid';

import { CustomerContext } from '~/contexts/Customer/CustomerContext';

import orderService from '~/services/OrderService';

const cx = classNames.bind(styles);

function Checkout() {
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const { cart, accessToken } = useContext(CustomerContext);

    const handleClickCheckout = async () => {
        try {
            await orderService.createOrder(
                { phone, address, message },
                accessToken,
            );
            toast('Order created successfully', {
                type: 'success',
            });
        } catch (e) {
            toast('Opps. Create order failed', {
                type: 'error',
            });
        }
    };

    return (
        <div className={cx('container')}>
            <h3 className={cx('title')}>Infomation</h3>
            <Field>
                <FieldHeader>
                    <InfoInput
                        title="Phone"
                        value={phone}
                        setValue={setPhone}
                    />
                </FieldHeader>
                <FieldBody>
                    <InfoInputA
                        title="Address"
                        value={address}
                        setValue={setAddress}
                    />
                </FieldBody>
            </Field>
            <div className={cx('content-order')}>
                <FieldBody>
                    <InfoInputA
                        title="Message"
                        value={message}
                        setValue={setMessage}
                    />
                </FieldBody>
            </div>
            <div className={cx('total-box')}>
                <Row>
                    <Column className="l-6">
                        <h4 className={cx('total-title')}>Total</h4>
                    </Column>
                    <Column className="l-6">
                        <p className={cx('total-number')}>$ {cart?.total}</p>
                    </Column>
                </Row>
                <div className={cx('total-detail')}></div>
            </div>

            <div className={cx('btn')}>
                <Button
                    className={cx('btn-submit')}
                    primary
                    onClick={handleClickCheckout}
                >
                    Proceed to checkout
                </Button>
            </div>
        </div>
    );
}
export default Checkout;

function Field({ children }) {
    return <div className={cx('field')}>{children}</div>;
}

function FieldHeader({ children }) {
    return <div className={cx('field-header')}>{children}</div>;
}

function FieldBody({ children }) {
    return <div className={cx('field-body')}>{children}</div>;
}

function InfoInput({ title, value, setValue }) {
    return (
        <div className={cx('info-input')}>
            <h5>{title}</h5>
            <div className={cx('info-text')}>
                <input
                    className={cx('text-field')}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    );
}

function InfoInputA({ title, value, setValue }) {
    return (
        <div className={cx('info-inputA')}>
            <h5>{title}</h5>
            <div className={cx('info-textA')}>
                <textarea
                    className={cx('text-fieldA')}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    );
}
