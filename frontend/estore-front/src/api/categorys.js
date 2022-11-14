import axios from 'axios';
import { baseURL } from './baseurl';

const categorys_url = baseURL + '/category'

export const fetchCategory  = (id) => axios.get(`${categorys_url}/${id}`);
export const createCategory = (newCategory) => axios.post(categorys_url, newCategory);
export const updateCategory = (updatedCategory) => axios.put(categorys_url, updatedCategory);
export const deleteCategory = (id) => axios.delete(categorys_url, id);