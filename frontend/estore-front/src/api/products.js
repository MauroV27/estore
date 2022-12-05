import axios from 'axios';
import { baseURL } from './baseurl';

const products_url = baseURL + '/product'

// export const fetchProduct  = (id) => axios.get(`${products_url}/${id}`);
export const fetchProduct  = (id) => {
    // @param (number) : id
    // get product with id = id
    axios.get(products_url, {id})
};

export const fetchProducts = () => {
    // @param = void
    // get all products from database
    axios.get(`${products_url}`)
};

export const createProduct = (description, price, amount, photoURL) => {
    /* 
        @param (string) description
        @param (number<int>) price
        @param (number<int>) amount
        @param (string) photoURL
    */
    axios.post(products_url, {description, price, amount, photoURL})
};

export const updateProduct = (description, price, amount, photoURL) => {
    /* 
        @param (string) description
        @param (number<int>) price
        @param (number<int>) amount
        @param (string) photoURL
    */
    axios.put(products_url, {description, price, amount, photoURL})
};

export const deleteProduct = (id) => {
    // @param (number) : id
    axios.delete(products_url, {id})
};