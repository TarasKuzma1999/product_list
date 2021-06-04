import { getProductAPI, getCommentsAPI, updateProductAPI, postNewCommentAPI, deleteCommentAPI } from "../api/api"

let initialState = {
    product: {},
    comments: []
}

const productReducer = (state = initialState, action) => {
    
    switch(action.type) { 
        case 'GET_PRODUCT':           
            return{
                ...state,
                product: action.product                
            }
            case 'UPDATE_PRODUCT':           
            return{
                ...state,
                product: action.product                
            }  
        case 'GET_COMMENTS':  
            return{
                ...state,
                comments: action.comments                
            }       
        case 'DELETE_COMMENT':
            let newComments = state.comments.filter(el => {
                return el.id !== action.id
            })                      
            return{
                ...state,
                comments: newComments                
            }
        default: 
            return state
        
    }    
}

export const updateProduct = (product) => ({ type: 'GET_PRODUCT', product})
export const getProduct = (product) => ({ type: 'UPDATE_PRODUCT', product})
export const deleteComment = (id) => ({ type: 'DELETE_COMMENT', id})
export const getComments = (comments) => ({ type: 'GET_COMMENTS', comments})




export const getOneProductThunk = (id) => {
    return (dispatch) => {        
        getProductAPI(id).then(response => {
            dispatch(getProduct(response));            
        })
    }
}
export const getCommentsThunk = () => {
    return (dispatch) => {        
        getCommentsAPI().then(response => {
            dispatch(getComments(response));            
        })
    }
}

export const updateProductThunk = (id, data) => {
    return (dispatch) => {        
        updateProductAPI(id, data).then(response => {
            if(response.status === 200) {
                dispatch(updateProduct(data))
            }            
        })
    }
}

export const createCommentThunk = (newMessage) => {
    return (dispatch) => {        
        postNewCommentAPI(newMessage).then(response => {
            if(response.status === 201) {
                getCommentsAPI().then(response => {
                    dispatch(getComments(response));            
                })
            }           
        })
    }
}

export const deleteCommentThunk = (id) => {
    return (dispatch) => {      
        deleteCommentAPI(id).then(response => {
            if(response.status === 200) {
                dispatch(deleteComment(id))
            }                        
        })   
    }
}


export default productReducer