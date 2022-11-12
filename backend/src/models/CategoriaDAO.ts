import { Request, Response } from "express";

import PrismaConnect from '../db/prismaConnect';
const prisma = PrismaConnect.getInstance();


export class CategoriaDAO {

    public async create(request: Request, response: Response) {
        const { descricao } = request.body;

        const createCategory = await prisma.categoria.create({ 
            data: {
                descricao : descricao
            }});
    
        
        return response.json({createCategory});
        
    }
    
    public async update(request: Request, response: Response) {
        const { id, nova_descricao } = request.body;

            const updateCategory = await prisma.categoria.update({
                where: {
                    id,
                },
                data : {
                    descricao : nova_descricao,
                }
            })

            return response.json({updateCategory});
        
    }

    public async delete(request: Request, response: Response) {
        const { id } = request.body;

        const deleteCategory = await prisma.categoria.delete({ 
            where : {
                id: id,
            },
        });
        
        return response.json({deleteCategory});
    }

    public async get(request: Request, response: Response) {
        const { id } = request.body;

        const getCategory = await prisma.categoria.findMany({
          where: {
            id,
          },
        });

        return response.json({getCategory})
    }

}