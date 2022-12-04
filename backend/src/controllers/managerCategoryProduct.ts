import { Request, Response } from "express";
import { CategoriaDAO } from "../models/CategoriaDAO";
import { CategoriaProdutoDAO } from "../models/CategoriaProdutoDAO";
import { ProdutoDAO } from "../models/ProdutoDAO";


export class ProductCategoryController{
    public async addProductToCategory(request: Request, response: Response){
        const { productId, categoryId } = request.body;

        const product = await new ProdutoDAO().get( productId as number );

        if (product.status == 'failed' || product.data == null ){
            response.json({...product});
        }

        const category = await new CategoriaDAO().get( categoryId as number  );

        if (category.status == 'failed' || category.data == null ){
            response.json({...category});
        }

        const {status, message, data} = await new CategoriaProdutoDAO().create(product.data, category.data);
        response.json({status, message, data});
    }

    public async getProductsFromcategory(request: Request, response: Response){
        const { categoryId } = request.body;

        const category = await new CategoriaDAO().get( categoryId as number  );

        if (category.status == 'failed' || category.data == null ){
            response.json({...category});
        }

        const {status, message, data} = await new CategoriaProdutoDAO().getProductsFromCategory(category.data);
        response.json({status, message, data});
    }

    public async getCategorysFromProducts(request: Request, response: Response){
        const { productId } = request.body;

        const product = await new ProdutoDAO().get( productId as number );

        if (product.status == 'failed' || product.data == null ){
            response.json({...product});
        }

        const {status, message, data} = await new CategoriaProdutoDAO().getCategorysFromProduct(product.data);
        response.json({status, message, data});
    }

}