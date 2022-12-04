import { Request, Response } from "express";
import { CategoriaDAO } from "../models/CategoriaDAO";

export class CategoryController{
    public async createCategory(request: Request, response: Response){
        const { description } = request.body;

        const {status, message, data} = await new CategoriaDAO().create( description );

        response.json({status, message, data});
    }

    public async updateCategory(request: Request, response: Response){
        const { id, description } = request.body;

        const {status, message, data} = await new CategoriaDAO().update( id as number, description );

        response.json({status, message, data});
    }

    public async deleteCategory(request: Request, response: Response){
        const { id } = request.body;

        const {status, message, data} = await new CategoriaDAO().delete( id as number );

        response.json({status, message, data});
    }

    public async getOneCategory(request: Request, response: Response){
        const { id } = request.body;

        const {status, message, data} = await new CategoriaDAO().get( id as number  );

        response.json({status, message, data});
    }


    public async getAllCategory(request: Request, response: Response){
        
        const {status, message, data} = await new CategoriaDAO().getAll(  );

        response.json({status, message, data});
    }

}