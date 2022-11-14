import * as connectProduct from '../actions/products';

function validateData(description, price, photo, quantity) {
    if ( description == "" || photo == "" || price <= 0 || quantity <= 0) {
        return {'status': 'failes', 'message': 'ERROR : product validation failed', dataToSend:{}};
    }

    const dataToSend = { description, price, photo, quantity };
    return {'status': 'success', 'message': 'Product is valid', dataToSend};
}

export async function createProduct(description, price, photo, quantity){
    
    const {status, message, dataToSend } = validateData(description, price, photo, quantity)

    if ( status == 'success' ){
        const productObject = {
            "descricao" : dataToSend.description, 
            "preco" : dataToSend.price, 
            "foto" : dataToSend.photo,
            "quantidade" : dataToSend.quantity,
        }

        const { data } = await connectProduct.createProduct(productObject);
        return data;

    } else {
        return {status, message}
    }
}

export async function getProduct(id) {
    const { data } = await connectProduct.getProduct(id);
    return data;
}