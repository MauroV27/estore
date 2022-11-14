import * as api from '../api/products';

export const getProdutcs = async (id) => {
    try {
        return await api.fetchProducts(id);
        
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

export const updateProduct = async (updateProsuct) => {
    try {
        return await api.updateProduct(updateProsuct);
        
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
