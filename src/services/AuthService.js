import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL + '/api/auth';

class AuthService {
    async login(data) {
        try {
            const res = await axios.post(`${baseURL}/login`, data, {
                'Content-Type': 'application/json',
            });
            return res.data.data;
        } catch (e) {
            console.error(e);
        }
    }
}

const authService = new AuthService();
export default authService;
