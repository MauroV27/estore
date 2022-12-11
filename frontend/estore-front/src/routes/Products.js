//bandaid pro erro de importação dos produtos

import React from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../components/Button";
// import useAuth from "../../hooks/useAuth";
import { getProducts } from "../actions/products";
// import * as C from "./styles";

//não terminado, ajeitar isso
const Products = () => {
    const arrayProducts = []
    arrayProducts.push(getProducts())
    return (
        <>
            <h2>Produtos</h2>
            <ul>
                {
                    arrayProducts.map((product) => <li key = {product.id} > {product.descricao} </li> )
                } 
            </ul>
        </>
    )
}

export default Products;