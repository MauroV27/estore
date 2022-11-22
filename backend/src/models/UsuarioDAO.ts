import PrismaConnect from '../db/prismaConnect';

const prisma = PrismaConnect.getInstance();

export class UsuarioDAO {
  public async create(params:{name:string, email:string, password:string, adress:string, login:string}) {

    // [ISSUE] : add validation for all atributes
    if ( params.name == '' || params.email == '' || params.login == '' || params.password == '' ){
      return {status: "failed", message: "User not exist.", data: null};
    }

    // [ISSUE] : encrypt password in database
    const encryptPassword : string = params.password;

    // [ISSUE] : validate if email or login already exist

    const createUser = await prisma.usuario.create({
      data: {
        nome: params.name,
        administrador : false,
        email : params.email,
        login : params.login,
        endereco : params.adress || "",
        senha : encryptPassword,
      },
    });

    const {senha, ...clientData} = {...createUser};
    
    return {status: "success", message: "success", data: clientData};
  }

  public async get( id: number ) {

    const getUser = await prisma.usuario.findFirst({
      where: {
        id : id,
      },
    });

    if ( getUser == null ){
      return {status: "failed", message: "User not exist.", data: null};
    } else {
      // remove password for response
      const {senha, ...clientData} = {...getUser};

      return {status: "success", message: "User exist.", data: clientData};
    }
  }

  public async update(params:{id:number, name:string, email:string, password:string, adress:string, login:string}) {

    let userExists = await prisma.usuario.findUnique({
      where: {
        id : params.id
      }
    })

    if ( userExists == null ){
      return {status: "failed", message: "User not exist.", data: null};
    }

    // [ISSUE] : encrypt password in database
    const encryptPassword : string = params.password;

    const updateUser = await prisma.usuario.update({
      where: {
        id : params.id,
      },
      data: {
        nome : params.name,
        email : params.email,
        login : params.login,
        endereco : params.adress,
        senha : encryptPassword,
      },
    });

    // const clientData = {
    //   id, 
    //   nome: updateUser.nome, 
    //   email: updateUser.email, 
    //   endereco: updateUser.endereco, 
    //   login: updateUser.login
    // };

    // remove password and administrator for response
    const {senha, administrador, ...clientData} = {...updateUser};

    return {status: "success", message: "User was updated.", data: clientData};
    
  }

  public async delete( id: number ) {

    let userExists = await prisma.usuario.findUnique({
      where: {
        id
      }
    })

    if ( userExists == null ){
      return {status: "failed", message: "User not exist."};
    }

    // [ISSUE] : This method not suport -> Cascading deletes (deleting related records)
    const deleteUser = await prisma.usuario.delete({
      where: {
        id,
      },
    })

    return {status: "success", message: "User deleted."};
  }

  public async getUserLogin(login:string, password:string) {

    let userExists = await prisma.usuario.findFirst({
      where: {
        login: login,
      }
    })

    if ( userExists == null ){
      return {status: "failed", message: "User or password was incorect.", id: -1}
    }

    if ( userExists.senha != password ){
      return {status: "failed",  message: "User or password was incorect.", id: -1}
    }

    return {status: "success", message: "success", id: userExists.id};
  }

}