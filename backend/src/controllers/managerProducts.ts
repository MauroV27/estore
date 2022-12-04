import { Request, Response } from 'express';

import { ProdutoDAO } from '../models/ProdutoDAO';

export class ProductController {
    
    public async createProduct(request: Request, response: Response){
        const { description, price, amount, photoURL } = request.body;

        const {status, message, data} = await new ProdutoDAO().create( description, price, amount, photoURL );

        response.json({status, message, data})
    }

    public async updateProduct(request: Request, response: Response){
        const { id, description, price, amount, photoURL } = request.body;

        const {status, message, data} = await new ProdutoDAO().update( id, description, price, amount, photoURL );

        response.json({status, message, data})
    }

    public async deleteProduct(request: Request, response: Response){
        const { id } = request.body;

        const {status, message, data} = await new ProdutoDAO().delete( id );

        response.json({status, message, data})
    }

    public async getProduct(request: Request, response: Response){
        const { id } = request.body;

        const {status, message, data} = await new ProdutoDAO().get( id );

        response.json({status, message, data})
    }

    public async getAllProducts(request: Request, response: Response){

        const {status, message, data} = await new ProdutoDAO().getAll();

        response.json({status, message, data})
    }

}


// Tasks : 
// responsavel por concectar produtos com categorias e gerenciar ambos (usar uma rota propria)
// - CRUD do produtos
// - Criar getter One and getter ALL
// - Atrelar e desatrelar produto a categroia 
