import axios from 'axios';
import { baseURL } from './baseurl';

export const registerSaleProduct = async (saleId, productId, amount) => {
    // @params : { saleId:number, productId:number, amount:number }
    return await axios.post(baseURL + '/saleProductRegister/', {saleId, productId, amount})
};

export const updateSaleProduct = async (saleId, productId, amount) => {
    // @params : { saleId:number, productId:number, amount:number }
    return await axios.put(baseURL + '/saleProductUpdate/', {saleId, productId, amount})
};

export const deleteSaleProduct = async (saleId, productId) => {
    // @params : { saleId:number, productId:number }
    return await axios.delete(baseURL + '/saleProductDelete/', {saleId, productId})
};

export const getSaleProduct = async (saleId, productId) => {
    // @params : { saleId:number, productId:number }
    return await axios.get(baseURL + '/saleProductOne/', {saleId, productId})
};

export const getProductsInSale = async (saleId) => {
    // @params : { saleId:number }
    return await axios.get(baseURL + '/productsInSale/', {saleId})
};

export const getSalesWithProduct = async (productId) => {
    // @params : { productId:number }
    return await axios.get(baseURL + '/salesWithProduct', {productId})
};