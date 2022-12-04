import { Router } from "express";
import { ProductController } from "../controllers/managerProducts";

const product = new ProductController();

export function connectProductRoutes(router:Router) {

    router.post('/product/', product.createProduct);
    router.get('/product/:id', product.getProduct);
    router.get('/product/', product.getAllProducts);
    router.put('/product/', product.updateProduct);
    router.delete('/product/', product.deleteProduct);
}