import axios from 'axios';

const url = 'http://localhost:5000';

const products_url = url + '/product'

export const fetchProducts = (id) => axios.get(`${products_url}/${id}`);
export const createProduct = (newProduct) => axios.post(products_url, newProduct);
export const updateProduct = (updatedProduct) => axios.put(products_url, updatedProduct);
export const deleteProduct = (id) => axios.delete(products_url, id);