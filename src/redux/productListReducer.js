import { getProductsAPI, deleteProductAPI, postNewProductAPI } from "../api/api"

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
                return el.id !== action.id
            })                      
            return{
                ...state,
                products: newProducts                
            }
        default: 
            return state
        
    }    
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
            if(response.status === 200) {
                dispatch(deleteProduct(id))
            }                        
        })   
    }
}

export const postNewProductThunk = (newProduct) => {
    return (dispatch) => {        
        postNewProductAPI(newProduct).then(response => {
            if(response.status === 201) {
                getProductsAPI().then(response => {
                    dispatch(getProducts(response));            
                })
            }           
        })
    }
}


export default productListReducer