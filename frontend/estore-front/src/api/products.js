import axios from 'axios';
import { baseURL } from './baseurl';

const products_url = baseURL + '/product'

export const fetchProduct  = (id) => axios.get(`${products_url}/${id}`);
export const fetchProducts = () => axios.get(`${products_url}`);
export const createProduct = (newProduct) => axios.post(products_url, newProduct);
export const updateProduct = (updatedProduct) => axios.put(products_url, updatedProduct);
export const deleteProduct = (id) => axios.delete(products_url, id);