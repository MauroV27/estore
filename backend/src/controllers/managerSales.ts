import { Request, Response } from 'express';

import { VendaDAO } from '../models/VendaDAO';
import { validateSession } from './managerUserSession';

export class SalesController {
    
    public async createSale(request: Request, response: Response){
        const { userSessionId } = request.body;

        const userId = validateSession(userSessionId);

        if ( userId == null || userId == undefined ){
            return response.json({status:"failed", message:"user not validate", data:null})
        }

        const {status, message, data} = await new VendaDAO().create( userId as number);

        response.json({status, message, data})
    }

    public async deleteSale(request: Request, response: Response){
        const { saleId } = request.body;

        const {status, message, data} = await new VendaDAO().delete( saleId as number );

        response.json({status, message, data})
    }

    public async getSale(request: Request, response: Response){
        const { saleId } = request.body;

        const {status, message, data} = await new VendaDAO().getOne( saleId as number );

        response.json({status, message, data})
    }

    public async getAllUserSales(request: Request, response: Response){

        const { userSessionId } = request.body;

        const userId = validateSession(userSessionId);

        if ( userId == null || userId == undefined ){
            return response.json({status:"failed", message:"user not validate", data:null})
        }

        const {status, message, data} = await new VendaDAO().getSalesFromUser( userId as number );

        response.json({status, message, data})
    }

}