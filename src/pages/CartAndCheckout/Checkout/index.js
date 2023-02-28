import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import Button from '~/components/Button';
import {Column, Row} from '~/components/Grid';

const cx = classNames.bind(styles);

function Checkout() {
    return (
        <div className={cx('container')}>
            <h3 className={cx('title')}>Infomation</h3>
            <Field>
                <FieldHeader>
                    <InfoInput1 title="Name" />
                    <InfoInput title="Phone" />
                </FieldHeader>
                <FieldBody>
                    <InfoInputA title="Address" />
                </FieldBody>
            </Field>
            <div className={cx('content-order')}>
                <h4 className={cx('title-order')}>Order</h4>
                <div className={cx('body-order')}>
                    <div className={cx('delivery-box')}>
                        <span className={cx('delivery')}>Delivery</span>
                        <div className={cx('btn-delivery')} role="group">
                            <Button light>Free</Button>
                            <Button light>Express 2$</Button>
                        </div>
                    </div>
                    <div className={cx('payment-box')}>
                        <div className={cx('payment-title')}>
                            <span className={cx('payment-method')}>Payment Method</span>
                        </div>
                        <div className={cx('payment-options')}>
                            <select
                                className={cx('option')}
                                onChange={'onChange'}
                            >
                                {payments.map((option, index) => (
                                    <option key={index} value={index}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={cx('promotion-box')}>
                        <div className={cx('promotion-title')}>
                            <span className={cx('promotion')}>Promotion</span>
                        </div>
                        <div className={cx('promotion-options')}>
                            <select
                                className={cx('option')}
                                onChange={'onChange'}
                            >
                                {promotions.map((option, index) => (
                                    <option key={index} value={index}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('subtotal-box')}>
                <div className='subtotal-header'>
                    <Row>
                        <Column className='l-6'>
                            <h4 className={cx('subtotal-title')}>Subtotal</h4>
                        </Column>
                        <Column className='l-6'>
                            <p className={cx('subtotal')}>32$</p>
                        </Column>
                    </Row>
                </div>
                <div className={cx('subtotal-detail')}>
                    <div className={cx('discount')}>
                        <Row>
                            <Column className='l-6'>
                                <span className={cx('discount-tag')}>Discount</span>
                            </Column>
                            <Column className='l-6'>
                                <p className={cx('discount-number')}>-5$</p>
                            </Column>
                        </Row>
                    </div>
                    <div className={cx('delivery')}>
                        <Row>
                            <Column className='l-6'>
                                <span className={cx('delivery-tag')}>Delivery</span>
                            </Column>
                            <Column className='l-6'>
                                <p className={cx('delivery-number')}>2$</p>
                            </Column>
                        </Row>
                    </div>
                </div>
            </div>
            <div className={cx('total-box')}>
                <Row>
                    <Column className='l-6'>
                        <h4 className={cx('total-title')}>Total</h4>
                    </Column>
                    <Column className='l-6'>
                        <p className={cx('total-number')}>29$</p>
                    </Column>
                </Row>
                <div className={cx('total-detail')}>
                </div>
            </div>
            
                    <div className={cx('btn')}>
                        <button className={cx('btn-submit')} type="submit">
                            Proceed to checkout
                        </button>
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
function InfoInput({ title }) {
    return (
        <div className={cx('info-input')}>
            <h5>{title}</h5>
            <div className={cx('info-text')}>
                <input className={cx('text-field')} type="text" />
            </div>
        </div>
    );
}
function InfoInput1({ title }) {
    return (
        <div className={cx('info-input1')}>
            <h5>{title}</h5>
            <div className={cx('info-text1')}>
                <input className={cx('text-field1')} type="text" />
            </div>
        </div>
    );
}
function InfoInputA({ title }) {
    return (
        <div className={cx('info-inputA')}>
            <h5>{title}</h5>
            <div className={cx('info-textA')}>
                <input className={cx('text-fieldA')} type="text" />
            </div>
        </div>
    );
}

const payments = [
    {
        id: 1,
        name: 'Credit card',
    },
    {
        id: 2,
        name: 'Banking',
    },
    {
        id: 3,
        name: 'Momo',
    },
];
const promotions = [
    {
        id: 1,
        name: '50%',
        code: 'Sale50%'
    },
    {
        id: 2,
        name: '20%',
        code: 'Sale20%'
    },
    {
        id: 3,
        name: '10%',
        code: 'Sale10%'
    },
];
