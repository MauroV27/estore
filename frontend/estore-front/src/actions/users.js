import * as api from '../api/users';

export const getUser = async (id) => {
    try {
        return await api.fetchUser(id);
        
      } catch (error) {
        console.log(error.message);
      }
}

export const createUser = async (user) => {
    try {
        return await api.createUser(user);
        
      } catch (error) {
        console.log(error.message);
      }
}

export const updateUser = async (updateUser) => {
    try {
        return await api.updateUser(updateUser);
        
      } catch (error) {
        console.log(error.message);
      }
}

export const deleteUser = async (userId) => {
    try {
        return await api.deleteUser(userId);
        
      } catch (error) {
        console.log(error.message);
      }
}
