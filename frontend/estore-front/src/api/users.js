import axios from 'axios';
import { baseURL } from './baseurl';

const users_url = baseURL + '/user'

export const fetchUser  = (id) => axios.get(`${users_url}/${id}`);
export const createUser = (newUser) => axios.post(users_url, newUser);
export const updateUser = (updatedUser) => axios.put(users_url, updatedUser);
export const deleteUser = (id) => axios.delete(users_url, id);