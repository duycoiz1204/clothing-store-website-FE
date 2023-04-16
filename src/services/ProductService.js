import axios from 'axios';
const baseURL = "http://localhost:8080";

class ProductService {

    createProduct(product) {
        return axios.post(baseURL +'/api/products', product)
    }
    getAllProduct() {
        return axios.get(baseURL + '/api/products')
    }

    getProductById(id) {
        return axios.get(baseURL+ '/api/products/' +id)
    }

    updateProduct(product, id) {
        return axios.put(baseURL+ '/api/products/' +id, product)
    }

    deleteProduct(id) {
        return axios.delete(baseURL+ '/api/products/' +id)
    }

}
const productService = new ProductService();
export default productService;