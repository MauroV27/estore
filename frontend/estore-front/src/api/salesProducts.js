import axios from 'axios';
import { baseURL } from './baseurl';

export const registerSaleProduct = (saleId, productId, amount) => {
    // @params : { saleId:number, productId:number, amount:number }
    axios.post(baseURL + '/saleProductRegister/', {saleId, productId, amount})
};

export const updateSaleProduct = (saleId, productId, amount) => {
    // @params : { saleId:number, productId:number, amount:number }
    axios.put(baseURL + '/saleProductUpdate/', {saleId, productId, amount})
};

export const deleteSaleProduct = (saleId, productId) => {
    // @params : { saleId:number, productId:number }
    axios.delete(baseURL + '/saleProductDelete/', {saleId, productId})
};

export const getSaleProduct = (saleId, productId) => {
    // @params : { saleId:number, productId:number }
    axios.get(baseURL + '/saleProductOne/', {saleId, productId})
};

export const getProductsInSale = (saleId) => {
    // @params : { saleId:number }
    axios.get(baseURL + '/productsInSale/', {saleId})
};

export const getSalesWithProduct = (productId) => {
    // @params : { productId:number }
    axios.get(baseURL + '/salesWithProduct', {productId})
};