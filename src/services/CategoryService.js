import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL + '/api/categories';

class CategoryService {
    async getAllCategory(token) {
        const res = await axios.get(baseURL, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return res.data;
    }

    async deleteCategory(id, token) {
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
const categoryService = new CategoryService()
export default categoryService;
