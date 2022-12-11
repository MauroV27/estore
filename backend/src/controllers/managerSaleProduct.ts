import { Request, Response } from 'express';
import { ProdutoDAO } from '../models/ProdutoDAO';

import { VendaDAO } from '../models/VendaDAO';
import { VendaProdutoDAO } from '../models/VendaProdutoDAO';

export class SalesProductController {
    
    public async createSaleProduct(request: Request, response: Response){
        const { saleId, productId, amount } = request.body;

        const sale = await new VendaDAO().getOne(saleId as number);
        
        if ( sale.data == null || sale.status == 'failed' ){
            return response.json({...sale})
        }

        const productDAO = new ProdutoDAO();
        const product = await productDAO.get(productId as number);

        if ( product.data == null || product.status == 'failed' ){
            return response.json({...product})
        }

        const create = await new VendaProdutoDAO().create( sale.data, product.data, amount);

        if ( create.data == null || create.status == 'failed' ){
            return response.json({...create})
        }

        const newAmount = product.data.quantidade - create.data.quantidade;

        const {status, message, data} = await productDAO.update(
            productId as number, 
            product.data.descricao, 
            product.data.preco, 
            newAmount, 
            product.data.foto
        );

        response.json({status, message, data});
    }

    public async updateSaleProduct(request: Request, response: Response){
        const { saleId, productId, amount } = request.body;

        const sale = await new VendaDAO().getOne(saleId as number);
        
        if ( sale.data == null || sale.status == 'failed' ){
            return response.json({...sale})
        }

        const productDAO = new ProdutoDAO();
        const product = await productDAO.get(productId as number);

        if ( product.data == null || product.status == 'failed' ){
            return response.json({...product})
        }

        const update = await new VendaProdutoDAO().update( sale.data, product.data, amount);

        if ( update.data == null || update.status == 'failed' ){
            return response.json({...update})
        }

        const newAmount = product.data.quantidade - update.data.quantidade;

        const {status, message, data} = await productDAO.update(
            productId as number, 
            product.data.descricao, 
            product.data.preco, 
            newAmount, 
            product.data.foto
        );

        response.json({status, message, data});
    }

    public async deleteSaleProduct(request: Request, response: Response){
        const { saleId, productId } = request.body;

        const {status, message, data} = await new VendaProdutoDAO().delete( saleId as number, productId as number );

        response.json({status, message, data})
    }

    public async getOneSaleProduct(request: Request, response: Response){
        const { saleId, productId } = request.body;

        const {status, message, data} = await new VendaProdutoDAO().getOne( saleId as number, productId as number );

        response.json({status, message, data})
    }

    public async getProductInSale(request: Request, response: Response){
        const { saleId } = request.body;

        const {status, message, data} = await new VendaProdutoDAO().getProductInSale( saleId as number );

        response.json({status, message, data})
    }

    public async getSalesWithProduct(request: Request, response: Response){
        const { productId } = request.body;

        const {status, message, data} = await new VendaProdutoDAO().getSalesWithProduct( productId as number );

        response.json({status, message, data})
    }

}