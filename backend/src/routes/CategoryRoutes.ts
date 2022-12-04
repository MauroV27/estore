import { Router } from "express";
import { CategoryController } from "../controllers/managerCategorys";

const category = new CategoryController();

export function connectCategoryRoutes(router:Router) {
    router.post('/category/', category.createCategory);
    router.get('/category/:id', category.getOneCategory);
    router.get('/category/', category.getAllCategory);
    router.put('/category/', category.updateCategory);
    router.delete('/category/', category.deleteCategory);
}