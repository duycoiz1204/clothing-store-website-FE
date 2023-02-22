import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '~/layouts/MainLayout';
import ImageLayout from '~/layouts/ImageLayout';
import ProfileLayout from './layouts/ProfileLayout';

import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Products from '~/pages/Products';
import ProductDetails from '~/pages/ProductDetails';
import Profile from './pages/Profile';
import Promotion from '~/pages/Promotion';
import ChangePassword from './pages/ChangePassword';
import OrderHistory from './pages/OrderHistory/index,';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetails />} />
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
