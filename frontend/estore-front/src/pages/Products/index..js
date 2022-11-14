import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../components/Button";
// import useAuth from "../../hooks/useAuth";
import getProducts from "../../actions/products";
// import * as C from "./styles";

const arrayProducts = getProducts()

const Products = () => {

    return (
        <>
            <h2>Produtos</h2>
            <ul>
                {
                    arrayProducts.map(product => {
                        return (
                            <li>
                                <p>
                                    {product.descricao}
                                </p>
                            </li>
                        )
                    })
                } 
            </ul>
        </>
    )
}

export default Products;