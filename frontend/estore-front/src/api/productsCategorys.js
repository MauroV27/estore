import axios from 'axios';
import { baseURL } from './baseurl';

export const addProductCategory = async (productId, categoryId ) => {
    // @param (number, number)
    return await axios.post(baseURL + '/addProductToCategory/', {productId, categoryId })
};

export const getProductsFromCategory = async (categoryId) => {
    // @param (number)
    return await axios.get(baseURL + '/getProductsFromCategory/', {categoryId})
};

export const getCategorysFromProduct = async (productId) => {
    // @param (number)
    return await axios.get(baseURL + '/getCategorysFromProduct/', {productId})
}