import axios from 'axios';
const baseURL = "http://localhost:8080";

class CategoryService {

    createCategory(category) {
        return axios.post(baseURL +'/api/categories', category)
    }
    getAllCategory() {
        return axios.get(baseURL+ '/api/categories')
    }

    getCategoryById(id) {
        return axios.get(baseURL+ '/api/categories/' +id)
    }

    updateCategory(category, id) {
        return axios.put(baseURL+ '/api/categories/' +id, category)
    }

    deleteCategory(id) {
        return axios.delete(baseURL+ '/api/categories/' +id)
    }

}
// eslint-disable-next-line import/no-anonymous-default-export
export default new CategoryService();