import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export class UsuarioDAO {
  async create(request: Request, response: Response) {
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


    console.log("Create user: ", createUser);
    return response.json(createUser);
  }

  async get(request: Request, response: Response) {
    const { id } = request.body;

    const getUser = await prismaClient.usuario.findFirst({
      where: {
        id,
      },
    });

    console.log("Get user: ", getUser);
    return response.json(getUser);
  }
}