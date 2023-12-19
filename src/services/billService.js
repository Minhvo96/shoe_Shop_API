import axios from "axios"

const urlAPI = 'https://json-server-five-mu.vercel.app/billDetails';
const billService = {
    getAllBills: async () => {
        return axios
            .get(urlAPI)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    createBill: async (obj) => {
        return axios
            .post(urlAPI, obj)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default billService;