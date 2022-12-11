import axios from 'axios';
import { baseURL } from './baseurl';

const categorys_url = baseURL + '/category'

// export const fetchCategory  = (id) => axios.get(`${categorys_url}/${id}`);

export const fetchCategory  = async (id) => {
    // @param (number) : id
    // get category with id = id
    return await axios.get(`${categorys_url}/${id}`, {id})
};

export const createCategory = async (description) => {
    // @param (string) : description
    // create category with value description
    return await axios.post(categorys_url, {description})
};

export const updateCategory = async (id, description) => {
    // @param (number) : id
    // @param (string) : description
    // update category with id to description
    return await axios.put(categorys_url, {id, description})
};

export const deleteCategory = async (id) => {
    // @param (number) : id
    // delete category with id = id
    return await axios.delete(categorys_url, {id})
};

export const getAllCategorys = async () => {
    return await axios.get(baseURL+'/categorys/')
};