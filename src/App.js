import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MainLayout from '~/layouts/MainLayout';
import ImageLayout from '~/layouts/ImageLayout';
import ProfileLayout from '~/layouts/ProfileLayout';

import Customer from './contexts/Customer';
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
import StaffAdmin from './pages/admin/StaffAdmin';
import CustomerAdmin from './pages/admin/CustomerAdmin';
import OrderAdmin from './pages/admin/OrderAdmin';
import CategoryAdmin from './pages/admin/CategoryAdmin'
import AddProduct from './pages/admin/AddProduct';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Customer */}
                    <Route element={<Customer />}>
                        <Route element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route
                                path="/products/:id"
                                element={<ProductDetails />}
                            />
                            <Route path="/products" element={<Products />} />
                            <Route path="/cart" element={<CartAndCheckout />} />
                        </Route>
                        <Route element={<ProfileLayout />}>
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/promotion" element={<Promotion />} />
                            <Route
                                path="/change_password"
                                element={<ChangePassword />}
                            />
                            <Route
                                path="/order_history"
                                element={<OrderHistory />}
                            />
                        </Route>
                    </Route>
                    <Route element={<ImageLayout />}>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Route>
                    {/* Admin */}
                    <Route path='/admin/' element={<AdminLayout />}>
                    <Route path='product' element={ < ProductsAdmin />} />
                    <Route path='staff' element={ < StaffAdmin />} />
                    <Route path='' element={ < CustomerAdmin />} />
                    <Route path='order' element={ < OrderAdmin />}  />
                    <Route path='category' element={ < CategoryAdmin />}  />
                    <Route path='add' element={ < AddProduct />} />

                </Route>    
                </Routes>
            </BrowserRouter>

            <ToastContainer closeOnClick />
        </>
    );
}

export default App;
