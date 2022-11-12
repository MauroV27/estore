import { Request, Response } from "express";
import PrismaConnect from '../db/prismaConnect';

const prisma = PrismaConnect.getInstance();

export class UsuarioDAO {
  public async create(request: Request, response: Response) {
    const { nome, email, senha, endereco, login } = request.body;

    // [ISSUE] : encrypt password in database
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
      return response.status(500).send("User not find.")
    } else {
      const {senha, ...clientData} = {...getUser};

      console.log("Get user: ", clientData);
      return response.json(clientData);
    }
  }

  public async update(request: Request, response: Response) {

    const { id, nome, email, senha, endereco, login } = request.body;

    let userExists = await prisma.usuario.findUnique({
      where: {
        id
      }
    })

    if ( userExists == null ){
      return response.json({"status": "failed", "messgae": "User not exist."})
    }

    // [ISSUE] : encrypt password in database

    const updateUser = await prisma.usuario.update({
      where: {
        id : id,
      },
      data: {
        nome,
        email,
        login,
        endereco,
        senha,
      },
    });

    const clientData = {
      id, 
      nome: updateUser.nome, 
      email: updateUser.email, 
      endereco: updateUser.endereco, 
      login: updateUser.login
    };

    return response.json(clientData);
    
  }

  public async delete(request: Request, response: Response) {

    const { id } = request.body;

    let userExists = await prisma.usuario.findUnique({
      where: {
        id
      }
    })

    if ( userExists == null ){
      return response.json({"status": "failed", "messgae": "User not exist."})
    }

    // [ISSUE] : This method not suport -> Cascading deletes (deleting related records)
    const deleteUser = await prisma.usuario.delete({
      where: {
        id,
      },
    })

    return response.json({"status": "sucess", "messgae": "User deleted."})
  }


}