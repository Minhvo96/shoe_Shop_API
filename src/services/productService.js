import axios from "axios"


const productService = {
    getAllProducts: async () => {
        return axios
            .get('http://localhost:3000/products')
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    createProduct: async (obj) => {
        return axios
            .post('http://localhost:3000/products', obj)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    editProduct: async (id, obj) => {
        return axios
            .patch('http://localhost:3000/products/' + id, obj)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    deleteProduct: async (id) => {
        return axios
            .delete('http://localhost:3000/products/' + id)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getById: async (id) => {
        return axios
            .get('http://localhost:3000/products/' + id)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default productService;