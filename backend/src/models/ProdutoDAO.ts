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

    public async create(request: Request, response: Response) {
        const { descricao, preco, foto, quantidade } = request.body;

        // const {status, message, result} : ProductResponse = this.validateDataForCreateProduct(descricao, preco, foto, quantidade);

        // if ( result == undefined ){
        //     return response.json({status, message})
        // } else {
        // [ISSUE] : Data used to create product is not validate
        const createProduct = await prisma.produto.create({ 
            data: {
                descricao : descricao, 
                preco : preco, 
                foto : foto,
                quantidade : quantidade,
            }});
        
        return response.json({createProduct});
        // }
        
    }
    
    public async update(request: Request, response: Response) {
        const { id, descricao, preco, foto, quantidade } = request.body;

        // const {status, message, result} : ProductResponse = this.validateDataForCreateProduct(descricao, preco, foto, quantidade);

        // if ( result == undefined ){
        //     return response.json({status, message})
        // } else {
            
        // [ISSUE] : id can not exist in db
        // [ISSUE] : Data used to update product is not validate
        const updateProduct = await prisma.produto.update({ 
            where : {
                id,
            },
            data: {
                descricao : descricao, 
                preco : preco, 
                foto : foto,
                quantidade : quantidade,
            },
        });
        
        return response.json({id:updateProduct.id});
        // }
    }

    public async delete(request: Request, response: Response) {
        const { id } = request.body;

        const productExists = await prisma.produto.findUnique({
            where: {
                id
            }
        })
    
        if ( productExists == null ){
            return response.json({"status": "failed", "messgae": "Product not exist."})
        }

        const deletedProduct = await prisma.produto.delete({ 
            where : {
                id: id,
            },
        });
        
        return response.json({deletedProduct});
    }

    public async get(request: Request, response: Response) {
        const { id } = request.params;

        if ( id == '' || id == undefined ) return response.json({"status": "failed", "messgae": "Product not exist."})

        const _id = parseInt(id as string);

        const productExists = await prisma.produto.findUnique({
            where: {
                id : _id,
            }
        })
    
        if ( productExists == null ){
            return response.json({"status": "failed", "messgae": "Product not exist."})
        }

        const getProduct = await prisma.produto.findFirst({
          where: {
            id : _id,
          },
        });

        return response.json({getProduct})
    }

    public async getAll(request: Request, response: Response) {

        const products = await prisma.produto.findMany({
            where: {
                quantidade : 1
            }
        })

        // console.log(products)
        
        if ( products == null ){
            return response.json({"status": "failed", "message": "No existing products."})
        }

        return response.json({products})
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