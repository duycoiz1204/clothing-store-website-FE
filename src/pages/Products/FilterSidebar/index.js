import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faXmark } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './FilterSidebar.module.scss';

const cx = classNames.bind(styles);

function FilterSidebar() {
    const categoryContent = mapCategories(categories);

    const statusContent = mapStatuses(statuses);

    return (
        <div className={cx('container')}>
            <Field>
                <FieldHeader>
                    <h4 className={cx('title')}>Filter</h4>
                    <Button className={cx('filter-button')} primary small>
                        Reset
                    </Button>
                </FieldHeader>
            </Field>
            <Field>
                <FieldHeader>
                    <h4 className={cx('title')}>All</h4>
                    <h4 className={cx('title')}>Men</h4>
                    <h4 className={cx('title')}>Women</h4>
                </FieldHeader>
            </Field>
            <Field>
                <FieldHeader>
                    <h4 className={cx('title')}>Status</h4>
                    <Button
                        className={cx('filter-button')}
                        primary
                        small
                        rightIcon={<FontAwesomeIcon icon={faCaretUp} />}
                    >
                        Hide
                    </Button>
                </FieldHeader>
                <FieldBody>
                    <ul className={cx('options')}>{statusContent}</ul>
                </FieldBody>
            </Field>
            <Field>
                <FieldHeader>
                    <h4 className={cx('title')}>Category</h4>
                    <Button
                        className={cx('filter-button')}
                        primary
                        small
                        rightIcon={<FontAwesomeIcon icon={faCaretUp} />}
                    >
                        Hide
                    </Button>
                </FieldHeader>
                <FieldBody>
                    <ul className={cx('options')}>{categoryContent}</ul>
                </FieldBody>
            </Field>
            <Field>
                <FieldHeader>
                    <h4 className={cx('title')}>Price</h4>
                    <Button
                        className={cx('filter-button')}
                        primary
                        small
                        rightIcon={<FontAwesomeIcon icon={faCaretUp} />}
                    >
                        Hide
                    </Button>
                </FieldHeader>
                <FieldBody>
                    <PriceInput title="Max:" />
                    <PriceInput title="Min:" />
                    <Button className={cx('apply-button')} primary small>
                        Apply
                    </Button>
                </FieldBody>
            </Field>
        </div>
    );
}

export default FilterSidebar;

function Field({ children }) {
    return <div className={cx('field')}>{children}</div>;
}

function FieldHeader({ children }) {
    return <div className={cx('field-header')}>{children}</div>;
}

function FieldBody({ children }) {
    return <div className={cx('field-body')}>{children}</div>;
}

function PriceInput({ title }) {
    return (
        <div className={cx('price-input')}>
            <span>{title}</span>
            <div className={cx('price-text')}>
                <input
                    className={cx('input-field')}
                    type="text"
                    placeholder="???"
                />
                <span>VND</span>
            </div>
        </div>
    );
}

const statuses = [
    { name: 'New Arrival', checked: true },
    { name: 'Sale Off', checked: true },
    { name: 'Limited Edition', checked: false },
    { name: 'Online Only', checked: false },
];

const categories = [
    { name: 'Shirts', checked: true },
    { name: 'T-Shirts', checked: true },
    { name: 'Jackets', checked: false },
    { name: 'Trousers', checked: false },
    { name: 'Shorts', checked: false },
    { name: 'Bags', checked: false },
    { name: 'Hats', checked: false },
    { name: 'Shoes', checked: false },
    { name: 'Accessories', checked: false },
];

function mapCategories(categories) {
    return categories.map((status, index) => (
        <li
            key={index}
            className={cx('option', {
                checked: status.checked,
            })}
        >
            <span>{status.name}</span>
            {status.checked && <FontAwesomeIcon icon={faXmark} />}
        </li>
    ));
}

function mapStatuses(statuses) {
    return statuses.map((status, index) => (
        <li
            key={index}
            className={cx('option', {
                checked: status.checked,
            })}
        >
            <span>{status.name}</span>
            {status.checked && <FontAwesomeIcon icon={faXmark} />}
        </li>
    ));
}
