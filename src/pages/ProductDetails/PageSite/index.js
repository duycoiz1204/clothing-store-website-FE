import classNames from 'classnames/bind';
import styles from './PageSite.module.scss';

const cx = classNames.bind(styles);

function PageSite() {
    return (
        <div className={cx('container')}>
            <span className={cx('home-page')}>Homepage</span>
            <span className={cx('divider')}>/</span>
            <span className={cx('category')}>Category</span>
            <span className={cx('divider')}>/</span>
            <span className={cx('product-name')}>Product name</span>
        </div>
    );
}

export default PageSite;
