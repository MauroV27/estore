import { Request, Response } from "express";

import PrismaConnect from '../db/prismaConnect';
const prisma = PrismaConnect.getInstance();

interface ProductStructure {
    descricao: string; 
    preco: number; 
    foto: string; 
    quantidade:number;
}

interface ProductResponse {
    status : String;
    message : String;
    result: ProductStructure | undefined;
} 

export class ProdutoDAO {

    public async createProduct(request: Request, response: Response) {
        const { descricao, preco, foto, quantidade } = request.body;

        const {status, message, result} : ProductResponse = this.validateDataForCreateProduct(descricao, preco, foto, quantidade);

        if ( result == undefined ){
            return response.json({status, message})
        } else {
            const createProduct = await prisma.produto.create({ 
                data: {
                    descricao : result.descricao, 
                    preco : result.preco, 
                    foto : result.foto,
                    quantidade : result.quantidade,
                }});
        
            
            return response.json({createProduct});
        }
        
    }
    
    public async updateProduct(request: Request, response: Response) {
        const { id, descricao, preco, foto, quantidade } = request.body;

        const {status, message, result} : ProductResponse = this.validateDataForCreateProduct(descricao, preco, foto, quantidade);

        if ( result == undefined ){
            return response.json({status, message})
        } else {
            const updateProduct = await prisma.produto.update({ 
                where : {
                    id,
                },
                data: {
                    descricao : result.descricao, 
                    preco : result.preco, 
                    foto : result.foto,
                    quantidade : result.quantidade,
                },
            });
        
            
            return response.json({id:updateProduct.id});
        }
    }

    public async removeProduct(request: Request, response: Response) {
        const { id } = request.body;

        const removedProduct = await prisma.produto.delete({ 
            where : {
                id: id,
            },
        });
        
        return response.json({removedProduct});
    }

    public async getProductDataByID(request: Request, response: Response) {
        const { id } = request.body;

        const getProduct = await prisma.produto.findFirst({
          where: {
            id,
          },
        });

        return response.json({getProduct})
    }


    private validateDataForCreateProduct(descricao:string, preco:number, foto:string, quantidade:number) : ProductResponse{
        // Method that validate data input for create a new product or update product data
        
        descricao = descricao.trim()
        foto = foto.trim()

        if ( preco <= 0 ){
            return {status:"ERROR", message: "Value of price must be bigger than 0.", result:undefined};
        }

        if ( quantidade <= 0 || !Number.isInteger(quantidade) ){
            return {status:"ERROR", message: "Value of quantytie must be a positive integer.", result:undefined};
        }

        return {status: "OK", message:"success", result:{descricao, preco, foto, quantidade}};
    }

}