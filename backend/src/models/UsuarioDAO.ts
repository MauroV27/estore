import { Request, Response } from "express";
import PrismaConnect from '../db/prismaConnect';

const prisma = PrismaConnect.getInstance();

export class UsuarioDAO {
  public async create(request: Request, response: Response) {
    const { nome, email, senha, endereco, login } = request.body;

    const createUser = await prisma.usuario.create({
      data: {
        nome,
        administrador : false,
        email,
        login,
        endereco,
        senha,
      },
    });

    console.log("Create user in database: ", createUser);
    
    return response.json({id:createUser.id, nome, email, login});
  }

  public async get(request: Request, response: Response) {
    const { id } = request.body;

    const getUser = await prisma.usuario.findFirst({
      where: {
        id,
      },
    });

    if ( getUser == null ){
      return response.status(500).send("Usuario não encontrado")
    } else {
      const {senha, ...clientData} = {...getUser};

      console.log("Get user: ", clientData);
      return response.json(clientData);
    }
  }

}