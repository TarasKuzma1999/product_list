import { useEffect, useState } from "react";
import { connect } from "react-redux"
import { getProductsThunk, sortProducts, deleteProductThunk } from "../redux/productListReducer"

const ProductList = (props) => {
    useEffect(() => {
        props.getProductsThunk();
    }, []);


    const sortByName = () => {
        let sortedProducts = props.state.products.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        })
        props.sortProducts(sortedProducts)
    }

    const sortByCount = () => {
        let sortedProducts = props.state.products.sort((a, b) => {
            if (a.count > b.count) {
                return 1;
            }
            if (a.count < b.count) {
                return -1;
            }
            return 0;
        })
        props.sortProducts(sortedProducts)
    }

    const deleteProduct = (id, name) => {
        let isDelete = window.confirm(`Ви хочете видалити ${name}`);
        if (isDelete) {
            props.deleteProductThunk(id)
        }
    }


    return (

        <div>
            <div>
                <p>Сортувати по:
                    <button onClick={() => sortByName()}>Назві</button>
                    <button onClick={() => sortByCount()}> Кількості продукту</button>
                </p>
            </div>
            <div className="list">
                {props.state.products.length ? props.state.products.map(el => <div key={el.id}>
                    <img src={el.imageUrl} alt={el.name} />
                    <span>{el.name}</span>
                    <span>Кількість одиниць: {el.count}</span>
                    <button>перейти</button>
                    <button onClick={() => deleteProduct(el.id, el.name)}>Видалити</button>
                </div>
                ) : <p>нема</p>}

            </div>
        </div>
    )
}

let mapState = (props) => ({ state: props.productList })


export default connect(mapState, { getProductsThunk, sortProducts, deleteProductThunk })(ProductList)