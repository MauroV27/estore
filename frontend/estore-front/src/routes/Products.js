//bandaid pro erro de importação dos produtos

import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../../components/Button";
// import useAuth from "../../hooks/useAuth";
import { getProducts } from "../actions/products";
// import * as C from "./styles";

//não terminado, ajeitar isso
const Products = () => {
    const arrayProducts = []
    const loadData = async () => {

        const getData = await getProducts();

        console.log(getData);

        if ( getData ){
            const {status, message, data } = getData.data;

            if ( status == "sucess" || data ){
                for ( let d of data ){
                    arrayProducts.push(d);
                }
            } else{
                console.error("Erro ao carregar produtos: ", message)
            }
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <h2>Produtos</h2>
            <ul>
                {
                    arrayProducts.map(product => <li key={product.id}> {product.descricao} </li>)
                } 
            </ul>
        </div>
    )
}

export default Products;