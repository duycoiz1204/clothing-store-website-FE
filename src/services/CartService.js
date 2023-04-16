import axios from 'axios';
const baseURL = "http://localhost:8080";

class CartService {

    createCart(cart) {  
        return axios.post(baseURL +'/api/cart', cart)
    }
    getAllCart() {
        return axios.get(baseURL+ '/api/cart')
    }

    updateCart(cart, id) {
        return axios.put(baseURL+ '/api/cart/' +id, cart)
    }

    deleteCart(id) {
        return axios.delete(baseURL+ '/api/cart/' +id)
    }

}
// eslint-disable-next-line import/no-anonymous-default-export
export default new CartService();