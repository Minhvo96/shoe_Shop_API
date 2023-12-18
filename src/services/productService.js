import axios from "axios"


const productService = {
    getAllProducts: async () => {
        return axios
            .get('https://jsonserver-vercel-api.vercel.app/products')
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    createProduct: async (obj) => {
        return axios
            .post('https://jsonserver-vercel-api.vercel.app/products', obj)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    editProduct: async (id, obj) => {
        return axios
            .patch('https://jsonserver-vercel-api.vercel.app/products/' + id, obj)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    deleteProduct: async (id) => {
        return axios
            .delete('https://jsonserver-vercel-api.vercel.app/products/' + id)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getById: async (id) => {
        return axios
            .get('https://jsonserver-vercel-api.vercel.app/products/' + id)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default productService;