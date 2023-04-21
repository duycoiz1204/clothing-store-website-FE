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

    async getAllOrders(token) {
        const res = await axios.get(baseURL, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }); 
        return res.data.data;

    }

    async getAllOrderOfCustomer(token) {
        const res = await axios.get(baseURL + '/customer', {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }); 
        return res.data.data;

    }

    async deleteOrder(id, token) {
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

    async updateOrder(id, status, token) {
        const res = await axios.put(baseURL + '/' + id, status, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }); 
        return res.data;
    }
        
    
}

const orderService = new OrderService();
export default orderService;
