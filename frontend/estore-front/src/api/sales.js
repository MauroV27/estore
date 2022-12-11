import axios from 'axios';
import { baseURL } from './baseurl';

const sales_url = baseURL + '/sale/'

export const registerSale = (userSessionId) => {
    //  @param {string} {userSessionId : string}
    axios.post(sales_url, {userSessionId})
};

export const deleteSale = (saleId) => {
    //  @param {number} {saleId : number}
    axios.delete(sales_url, {saleId})
};

export const getSale = (saleId) => {
    //  @param {number} {saleId : number}
    axios.get(sales_url, {saleId})
};

export const getSalesWithUser = (userId) => {
    //  @param {number} createSale={userSessionId : string}
    axios.get(`${baseURL}/salesFromUser`, {userId})
};