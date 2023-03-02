import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '~/layouts/MainLayout';
import ImageLayout from '~/layouts/ImageLayout';
import ProfileLayout from '~/layouts/ProfileLayout';

import Home from '~/pages/customer/Home';
import SignIn from '~/pages/customer/SignIn';
import SignUp from '~/pages/customer/SignUp';
import Products from '~/pages/customer/Products';
import ProductDetails from '~/pages/customer/ProductDetails';
import Profile from '~/pages/customer/Profile';
import Promotion from '~/pages/customer/Promotion';
import ChangePassword from '~/pages/customer/ChangePassword';
import OrderHistory from '~/pages/customer/OrderHistory/index,';
import CartAndCheckout from '~/pages/customer/CartAndCheckout';

import AdminLayout from '~/layouts/AdminLayout';
import ProductsAdmin from './pages/admin/ProductsAdmin';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Customer */}
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
                    <Route path="/cart" element={<CartAndCheckout />} />
                </Route>
                <Route element={<ProfileLayout />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/promotion" element={<Promotion />} />
                    <Route path="/change_password" element={<ChangePassword />} />
                    <Route path="/order_history" element={<OrderHistory/>} />
                </Route>
                <Route element={<ImageLayout />}>
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Route>

                {/* Admin */}
                <Route path='/admin/' element={<AdminLayout />}>
                    <Route path='product' element={<ProductsAdmin />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
