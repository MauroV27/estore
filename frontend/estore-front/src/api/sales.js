import axios from 'axios';
import { baseURL } from './baseurl';

const sales_url = baseURL + '/sale/'

export const registerSale = async (userSessionId) => {
    //  @param {string} {userSessionId : string}
    return await axios.post(sales_url, {userSessionId})
};

export const deleteSale = async (saleId) => {
    //  @param {number} {saleId : number}
    return await axios.delete(sales_url, {saleId})
};

export const getSale = async (saleId) => {
    //  @param {number} {saleId : number}
    return await axios.get(sales_url, {saleId})
};

export const getSalesWithUser = async (userId) => {
    //  @param {number} createSale={userSessionId : string}
    return await axios.get(`${baseURL}/salesFromUser`, {userId})
};