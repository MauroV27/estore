import { Request, Response } from "express";
import { PrismaClient, Usuario } from "@prisma/client";

const prismaClient = new PrismaClient();

export class UsuarioDAO {
  public async create(request: Request, response: Response) {
    const { nome, email, senha, endereco, login } = request.body;

    const createUser = await prismaClient.usuario.create({
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

    const getUser = await prismaClient.usuario.findFirst({
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

  private hideSensitiveDataForResponse(user:Usuario) : Object{
    const {senha, ...publicData} = {...user}; 
    return publicData;
  }
}