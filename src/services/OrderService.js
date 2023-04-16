import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL + '/api/orders';

class OrderService {
    async createOrder(info, token) {
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
}

const orderService = new OrderService();
export default orderService;
