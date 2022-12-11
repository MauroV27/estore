import axios from 'axios';
import { baseURL } from './baseurl';

const categorys_url = baseURL + '/category'

// export const fetchCategory  = (id) => axios.get(`${categorys_url}/${id}`);

export const fetchCategory  = (id) => {
    // @param (number) : id
    // get category with id = id
    axios.get(`${categorys_url}/${id}`, {id})
};

export const createCategory = (description) => {
    // @param (string) : description
    // create category with value description
    axios.post(categorys_url, {description})
};

export const updateCategory = (id, description) => {
    // @param (number) : id
    // @param (string) : description
    // update category with id to description
    axios.put(categorys_url, {id, description})
};

export const deleteCategory = (id) => {
    // @param (number) : id
    // delete category with id = id
    axios.delete(categorys_url, {id})
};

export const getAllCategorys = () => {
    axios.get(baseURL+'/categorys/')
};