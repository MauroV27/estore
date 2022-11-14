import * as api from '../api/products';

export const getProduct = async (id) => {
    try {
        return await api.fetchProduct(id);
        
      } catch (error) {
        console.log(error.message);
      }
}

export const createProduct = async (product) => {
    try {
        return await api.createProduct(product);
        
      } catch (error) {
        console.log(error.message);
      }
}

export const updateProduct = async (updateProduct) => {
    try {
        return await api.updateProduct(updateProduct);
        
      } catch (error) {
        console.log(error.message);
      }
}

export const deleteProduct = async (productId) => {
    try {
        return await api.deleteProduct(productId);
        
      } catch (error) {
        console.log(error.message);
      }
}
