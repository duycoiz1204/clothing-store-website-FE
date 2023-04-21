import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL + '/api/products';

class ProductService {

    async addProduct(info, token) {
        const res = await axios.post(baseURL, info, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        if (res.response.status !== 201) {
            throw new Error(res.data.message);
        }
        return res.data.data;
    }

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
    async deleteProduct(id, token) {
        try {
            const res = await axios.delete(baseURL + '/' + id, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            if (!res.ok) return false;
            return true;
        } catch (err) {
            throw err;
        }
    }

}

const productService = new ProductService();
export default productService;
