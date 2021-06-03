import * as axios from 'axios'

export const getProductsAPI = () => {
    return axios.get(`https://60b89a5db54b0a0017c03ff8.mockapi.io/api/products`).then(response => response.data)
}

export const deleteProductAPI = (id) => {
    return axios.delete(`https://60b89a5db54b0a0017c03ff8.mockapi.io/api/products/${id}`)
}