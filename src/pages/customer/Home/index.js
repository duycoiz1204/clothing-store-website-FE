import classNames from 'classnames/bind';

import { Grid } from '~/components/Grid';

import styles from './Home.module.scss';
import image from '~/assets/images/img-home-background.jpg';
import ProductsSlider from '~/components/ProductsSlider';

import FollowUs from './FollowUs';
import EmailRegister from './EmailRegister';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <Grid className={cx('wide')}>
                <div className={cx('block-img')}>
                    <img
                        alt=""
                        className={cx('img-background')}
                        src={image}
                    ></img>
                </div>

                <ProductsSlider title="Featured Products" />

                <FollowUs />

                {/* Item Input */}
                <EmailRegister />
            </Grid>
        </div>
    );
}

export default Home;
