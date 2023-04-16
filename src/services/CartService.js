import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL + '/api/cart';

class CartService {
    async getCart(token) {
        const res = await axios.get(baseURL, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return res.data.data;
    }

    async addProductToCart(info, token) {
        const res = await axios.post(baseURL, info, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return res.data.data;
    }

    async updateProductQuantityInCart(info, token) {
        const res = await axios.put(baseURL, info, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return res.data.data;
    }

    async deleteProductOutCart(info, token) {
        const res = await axios.delete(baseURL, info, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return res.data.data;
    }
}

const cartService = new CartService();
export default cartService;
