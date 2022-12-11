import axios from 'axios';
import { baseURL } from './baseurl';

const users_url = baseURL + '/user'

// export const fetchUser  = (id) => axios.get(`${users_url}/${id}`);
export const createUser = async (name, email, password, adress, login) => {
    // @params (string, string, string, string, string)
    return await axios.post(`${baseURL}/register/`, {name, email, password, adress, login})
};

export const updateUser = async (userSessionId, name, email, password, adress, login) => {
    // @params (string, string, string, string, string, string)
    return await axios.put(users_url, {userSessionId, name, email, password, adress, login})
};

export const loginUser = async (login, password) => {
    // @params (string, string)
    return await axios.post(`${baseURL}/login/`, {login, password})
};

export const logouUser = async (userSessionId) => {
    // @params (string)
    return await axios.post(`${baseURL}/logout/`, {userSessionId})
};

export const getUser = async (userSessionId) => {
    // @params (string)
    return await axios.get(users_url, {userSessionId})
}

export const deleteUser = async (userSessionId) => {
    // @params (string)
    return await axios.delete(users_url, {userSessionId})
};