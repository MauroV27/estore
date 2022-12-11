import axios from 'axios';
import { baseURL } from './baseurl';

const users_url = baseURL + '/user'

// export const fetchUser  = (id) => axios.get(`${users_url}/${id}`);
export const createUser = (name, email, password, adress, login) => {
    // @params (string, string, string, string, string)
    axios.post(`${baseURL}/register/`, {name, email, password, adress, login})
};

export const updateUser = (userSessionId, name, email, password, adress, login) => {
    // @params (string, string, string, string, string, string)
    axios.put(users_url, {userSessionId, name, email, password, adress, login})
};

export const loginUser = (login, Password) => {
    // @params (string, string)
    axios.post(`${baseURL}/login/`, {login, Password})
};

export const logouUser = (userSessionId) => {
    // @params (string)
    axios.post(`${baseURL}/logout/`, {userSessionId})
};

export const getUser = (userSessionId) => {
    // @params (string)
    axios.get(users_url, {userSessionId})
}

export const deleteUser = (userSessionId) => {
    // @params (string)
    axios.delete(users_url, {userSessionId})
};