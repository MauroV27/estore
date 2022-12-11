import { Router } from "express";
import { SalesProductController } from "../controllers/managerSaleProduct";

const salesProduct = new SalesProductController();

export function connectSalesProductsRoutes(router:Router) {

    router.post('/saleProductRegister/', salesProduct.createSaleProduct);
    router.put('/saleProductUpdate/', salesProduct.updateSaleProduct);
    router.delete('/saleProductDelete/', salesProduct.deleteSaleProduct);

    router.get('/saleProductOne/', salesProduct.getOneSaleProduct);
    router.get('/productsInSale/', salesProduct.getProductInSale);
    router.get('/salesWithProduct/', salesProduct.getSalesWithProduct);
    
}