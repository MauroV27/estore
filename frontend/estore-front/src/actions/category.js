import * as api from '../api/categorys';

export const getCategory = async (id) => {
    try {
        return await api.fetchCategory(id);
        
      } catch (error) {
        console.log(error.message);
      }
}

export const createCategory = async (category) => {
    try {
        return await api.createCategory(category);
        
      } catch (error) {
        console.log(error.message);
      }
}

export const updateCategory = async (updateCategory) => {
    try {
        return await api.updateCategory(updateCategory);
        
      } catch (error) {
        console.log(error.message);
      }
}

export const deleteCategory = async (categoryId) => {
    try {
        return await api.deleteCategory(categoryId);
        
      } catch (error) {
        console.log(error.message);
      }
}
