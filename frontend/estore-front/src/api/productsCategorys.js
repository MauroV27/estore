import axios from 'axios';
import { baseURL } from './baseurl';

export const addProductCategory = (productId, categoryId ) => {
    // @param (number, number)
    axios.post(baseURL + '/addProductToCategory/', {productId, categoryId })
};

export const getProductsFromCategory = (categoryId) => {
    // @param (number)
    axios.get(baseURL + '/getProductsFromCategory/', {categoryId})
};

export const getCategorysFromProduct = (productId) => {
    // @param (number)
    axios.get(baseURL + '/getCategorysFromProduct/', {productId})
}