import { Router } from "express";
import { ProductCategoryController } from "../controllers/managerCategoryProduct";

const productCategory = new ProductCategoryController();

export function connectProductCategoryRoutes(router:Router) {

    router.post('/addProductToCategory/', productCategory.addProductToCategory);
    router.get('/getProductsFromCategory/', productCategory.getProductsFromcategory);
    router.get('/getCategorysFromProduct/', productCategory.getCategorysFromProducts);

}