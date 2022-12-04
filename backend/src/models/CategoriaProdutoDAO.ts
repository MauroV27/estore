import { Categoria, Produto } from '@prisma/client';
import PrismaConnect from '../db/prismaConnect';
const prisma = PrismaConnect.getInstance();

export class CategoriaProdutoDAO {

    public async create( product:Produto|null, categoria:Categoria|null) {

        if (product == null || categoria == null){
            return {status:"failed", message:"failed in get data", data:null};
        }

        const createCategoryProduct = await prisma.categoriaProduto.create({ 
            data: {
                categoriaId : categoria.id,
                produtoId : product.id,
            }});
        
        if ( createCategoryProduct != null ){
            return {status:"success", message:`Product:${product.id} added to category:${categoria.id}..`, data: {...createCategoryProduct}};
        }

        return {status:"failed", message:"failed in get products", data:null};
    }

    public async getProductsFromCategory(categoria:Categoria|null) {
        // Get products  from a especific category

        if (categoria == null){
            return {status:"failed", message:"failed in get data", data:null};
        }

        const categoryId : number = categoria.id;

        const productsInCategory = await prisma.categoriaProduto.findMany({
            where :{
                categoria : {
                    id : categoryId,
                }
            }
        })
        
        if ( productsInCategory != null ){
            return {status:"success", message:`get products in category:${categoryId}..`, data: [...productsInCategory]};
        }

        return {status:"failed", message:"failed in get products from category:"+categoryId, data:null};
    }

    public async getCategorysFromProduct(product:Produto|null) {
        // Get categorys from a especific product

        if (product == null){
            return {status:"failed", message:"failed in get data", data:null};
        }

        const productId : number = product.id;

        const CategorysInproduct = await prisma.categoriaProduto.findMany({
            where :{
                produto : {
                    id :productId,
                }
            }
        })

        if ( CategorysInproduct != null ){
            return {status:"success", message:`get categorys in product:${productId}..`, data: [...CategorysInproduct]};
        }
        
        return {status:"failed", message:"failed in get categorys from product:"+productId, data:null};
    }

}