import { getProductsAPI, deleteProductAPI } from "../api/api"

let initialState = {
    products: []
}

const productListReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case 'GET_PRODUCTS':           
            return{
                ...state,
                products: action.products                
            }
        case 'SORT_PRODUCTS':           
            return{
                ...state,
                products: action.products                
            }
        case 'DELETE_PRODUCTS':
            let newProducts = state.products.filter(el => {
                console.log(el.id, action.id)
                return el.id !== action.id
            })
                      
            return{
                ...state,
                products: newProducts                
            }
    }
    return state
}

export const getProducts = (products) => ({ type: 'GET_PRODUCTS', products})
export const sortProducts = (products) => ({ type: 'SORT_PRODUCTS', products})
export const deleteProduct = (id) => ({ type: 'DELETE_PRODUCTS', id})




export const getProductsThunk = () => {
    return (dispatch) => {        
        getProductsAPI().then(response => {
            dispatch(getProducts(response));            
        })
    }
}

export const deleteProductThunk = (id) => {
    return (dispatch) => {      
        deleteProductAPI(id).then(response => {
            console.log(response.status)
            if(response.status === 200) {
                dispatch(deleteProduct(id))
            }                        
        })
        

    }
}


export default productListReducer