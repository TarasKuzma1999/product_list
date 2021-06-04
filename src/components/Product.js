import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "redux"
import { getOneProductThunk, getCommentsThunk, updateProductThunk, createCommentThunk, deleteCommentThunk } from "../redux/productReducer"
import UpdateProduct from "./update-product"

const Product = (props) => {
    useEffect(() => {
        let productId = props.match.params.id
        props.getOneProductThunk(productId)
        props.getCommentsThunk()
    }, []);

    const comments = props.state.comments.filter(el => el.productId === +props.state.product.id)
    let [newMessage, setNewMessage] = useState('')

    const createNewMessage = () => {
        let date = new Date()
        let createdMessage = {
            "productId": +props.state.product.id,
            "description": newMessage,
            "date": date.toJSON()
        }
        if (newMessage) {
            props.createCommentThunk(createdMessage)
            setNewMessage('')
        }
    }

    return (
        <div>
            <img src={props.state.product.imageUrl} alt={props.state.product.name} />
            <h2>{props.state.product.name}</h2>
            <p>Кількість продукту в наявності: {props.state.product.count}</p>
            {/* <p>Розміри: {props.state.product.size.width} x {props.state.product.size.height}</p>
            <p>Вага: {props.state.product.weight}</p> */}
            <UpdateProduct state={props.state.product} updateProductThunk={props.updateProductThunk} />
            {comments.length ? comments.map(el => <div key={el.id}>
                <p>{el.description}</p>
                <p>{el.date.slice(11, 19)} {el.date.slice(0, 10)}</p>
                <button onClick={() => props.deleteCommentThunk(el.id)}>Видалити</button>
            </div>)
                : <div>Коментарів немає</div>}
            <div>
                <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                <button onClick={() => createNewMessage()}>Додати коментар</button>
            </div>
        </div>
    )
}


let mapState = (props) => ({ state: props.product })


export default compose(connect(mapState, { getOneProductThunk, getCommentsThunk, updateProductThunk, createCommentThunk, deleteCommentThunk }), withRouter)(Product)
