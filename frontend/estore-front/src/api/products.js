import axios from 'axios';
import { baseURL } from './baseurl';

const products_url = baseURL + '/product'

// export const fetchProduct  = (id) => axios.get(`${products_url}/${id}`);
export const fetchProduct  = async (id) => {
    // @param (number) : id
    // get product with id = id
    return await axios.get(products_url, {id})
};

export const fetchProducts = async () => {
    // @param = void
    // get all products from database
    return await axios.get(`${products_url}`)
};

export const createProduct = async (description, price, amount, photoURL) => {
    /* 
        @param (string) description
        @param (number<int>) price
        @param (number<int>) amount
        @param (string) photoURL
    */
    return await axios.post(products_url, {description, price, amount, photoURL})
};

export const updateProduct = async (description, price, amount, photoURL) => {
    /* 
        @param (string) description
        @param (number<int>) price
        @param (number<int>) amount
        @param (string) photoURL
    */
    return await axios.put(products_url, {description, price, amount, photoURL})
};

export const deleteProduct = async (id) => {
    // @param (number) : id
    return await axios.delete(products_url, {id})
};