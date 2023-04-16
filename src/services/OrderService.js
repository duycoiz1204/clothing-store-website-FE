import axios from 'axios';
const baseURL = "http://localhost:8080";

class OrderService {

    createOrder(order) {
        return axios.post(baseURL + '/api/orders', order)
    }
    getAllOrder() {
        return axios.get(baseURL+ '/api/orders')
    }

    getOrderByCustormer() {
        return axios.get(baseURL+ '/api/orders/customer')
    }

    updateOrder(order, id) {
        return axios.put(baseURL+ '/api/orders/' +id, order)
    }

    deleteOrder(id) {
        return axios.delete(baseURL+ '/api/orders/' +id)
    }

}
// eslint-disable-next-line import/no-anonymous-default-export
export default new OrderService();