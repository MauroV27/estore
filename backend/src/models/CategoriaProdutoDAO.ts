import { Request, Response } from "express";

import PrismaConnect from '../db/prismaConnect';
const prisma = PrismaConnect.getInstance();

export class CategoriaProdutoDAO {

    public async create(request: Request, response: Response) {
        const { categoriaId, produtoId } = request.body;

        const createCategoryProduct = await prisma.categoriaProduto.create({ 
            data: {
                categoriaId,
                produtoId,
            }});
        
        return response.json({
            createCategoryProduct
        });
        
    }

    public async getProductsFromCategory(request: Request, response: Response) {
        // Get products  from a especific category
        const { categoriaId } = request.body;

        const productsInCategory = await prisma.categoriaProduto.findMany({
            where :{
                categoria : {
                    id : categoriaId,
                }
            }
        })
        
        return response.json({
            productsInCategory
        });
    }

    public async getCategorysFromProduct(request: Request, response: Response) {
        // Get categorys from a especific product

        const { produtoId } = request.body;

        const CategorysInproduct = await prisma.categoriaProduto.findMany({
            where :{
                produto : {
                    id : produtoId,
                }
            }
        })
        
        return response.json({
            CategorysInproduct
        });
    }

}