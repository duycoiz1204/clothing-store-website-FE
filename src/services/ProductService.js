import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL + '/api/products';

class ProductService {
    async getProducts(token) {
        const res = await axios.get(baseURL, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return res.data.data;
    }

    async getProductsWithPage(page, token) {
        const res = await axios.get(`${baseURL}?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return res.data.data;
    }

    async getProduct(id, token) {
        const res = await axios.get(`${baseURL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return res.data.data;
    }
}

const productService = new ProductService();
export default productService;
