import axios from 'axios';
const baseURL = process.env.REACT_APP_BACKEND_BASE_URL + '/api/customers';
class CustomerService {

    async getAllCustomerAccounts(token) {
        const res = await axios.get(baseURL, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    }
}
const categoryService = new CustomerService()
export default categoryService;