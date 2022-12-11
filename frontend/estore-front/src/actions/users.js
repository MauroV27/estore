import * as api from '../api/users';

export const loginUser = async (login, password) => {
  try {
      return await api.loginUser(login, password);
      
    } catch (error) {
      console.log(error.message);
    }
}

export const getUser = async (userSessionId) => {
    try {
        return await api.getUser(userSessionId);
        
      } catch (error) {
        console.log(error.message);
      }
}

export const createUser = async (name, email, password, adress, login) => {
    try {
        return await api.createUser(name, email, password, adress, login);
        
      } catch (error) {
        console.log(error.message);
      }
}

export const updateUser = async (userSessionId, name, email, password, adress, login) => {
    try {
        return await api.updateUser(userSessionId, name, email, password, adress, login);
        
      } catch (error) {
        console.log(error.message);
      }
}

export const deleteUser = async (userSessionId) => {
    try {
        return await api.deleteUser(userSessionId);
        
      } catch (error) {
        console.log(error.message);
      }
}
