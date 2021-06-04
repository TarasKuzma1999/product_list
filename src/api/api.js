import * as axios from 'axios'

export const getProductsAPI = () => {
    return axios.get(`https://60b89a5db54b0a0017c03ff8.mockapi.io/api/products`).then(response => response.data)
}

export const deleteProductAPI = (id) => {
    return axios.delete(`https://60b89a5db54b0a0017c03ff8.mockapi.io/api/products/${id}`)
}

export const postNewProductAPI = (newProduct) => {
    return axios.post(`https://60b89a5db54b0a0017c03ff8.mockapi.io/api/products`, newProduct)
}

export const getProductAPI = (id) => {
    return axios.get(`https://60b89a5db54b0a0017c03ff8.mockapi.io/api/products/${id}`).then(response => response.data)
}

export const getCommentsAPI = () => {
    return axios.get(`https://60b89a5db54b0a0017c03ff8.mockapi.io/api/comments`).then(response => response.data)
}

export const updateProductAPI = (id, data) => {
    return axios.put(`https://60b89a5db54b0a0017c03ff8.mockapi.io/api/products/${id}`, data)
}

export const postNewCommentAPI = (newMessage) => {
    return axios.post(`https://60b89a5db54b0a0017c03ff8.mockapi.io/api/comments`, newMessage)
}

export const deleteCommentAPI = (id) => {
    return axios.delete(`https://60b89a5db54b0a0017c03ff8.mockapi.io/api/comments/${id}`)
}