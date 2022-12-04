import PrismaConnect from '../db/prismaConnect';
import { hash, compare } from 'bcrypt';

const prisma = PrismaConnect.getInstance();

export class UsuarioDAO {
  public async create(params:{name:string, email:string, password:string, adress:string, login:string}) {

    if ( params.name == '' || params.email == '' || params.login == '' || params.password == '' ){
      return {status: "failed", message: "User not exist.", data: null};
    }

    const emailStatus = await this.checkIfEmailAlreadyExists(params.email);

    if ( emailStatus.emailAlredyExists ) { 
      return {status: "failed", message: emailStatus.message, data: null};
    }

    const loginStatus = await this.checkIfLoginAlreadyExists(params.login);

    if ( loginStatus.loginAlredyExists ) { 
      return {status: "failed", message: loginStatus.message, data: null};
    }

    // encrypt password in database [IMPLEMENTED]
    const hashPassword : string = await this.hashPassword(params.password);

    const createUser = await prisma.usuario.create({
      data: {
        nome: params.name,
        administrador : false,
        email : params.email,
        login : params.login,
        endereco : params.adress || "",
        senha : hashPassword,
      },
    });

    const {senha, ...clientData} = {...createUser};
    
    return {status: "success", message: "success", data: {...clientData}};
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

      return {status: "success", message: "User exist.", data: {...clientData}};
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

    // encrypt password in database [IMPLEMENTED]
    const hashPassword : string = await this.hashPassword(params.password);

    const updateUser = await prisma.usuario.update({
      where: {
        id : params.id,
      },
      data: {
        nome : params.name,
        email : params.email,
        login : params.login,
        endereco : params.adress,
        senha : hashPassword,
      },
    });

    const {senha, administrador, ...clientData} = {...updateUser};

    return {status: "success", message: "User was updated.", data: {...clientData}};
  }

  public async delete( id: number ) {

    let userExists = await prisma.usuario.findUnique({
      where: {
        id
      }
    })

    if ( userExists == null ){
      return {status: "failed", message: "User not exist.", data:null};
    }

    // [ISSUE] : This method not suport -> Cascading deletes (deleting related records)
    const deleteUser = await prisma.usuario.delete({
      where: {
        id,
      },
    })

    return {status: "success", message: "User deleted.", data: {...deleteUser}};
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

    const validatePassword = await this.comparePassword(password, userExists.senha);

    if ( validatePassword == false ){
      return {status: "failed",  message: "User or password was incorect.", id: -1}
    }

    return {status: "success", message: "success", id: userExists.id};
  }


  public async checkIfLoginAlreadyExists(login:string) {

    const loginExists = await prisma.usuario.findFirst({
      where: {
        login: login,
      }
    })

    if ( loginExists == null ){
      return { loginAlredyExists : false, message: undefined};
    } 
      
    return { loginAlredyExists : true, message: "login already exists, please try other..." };
  }

  public async checkIfEmailAlreadyExists(email:string) {

    const emailExists = await prisma.usuario.findFirst({
      where: {
        email: email,
      }
    })

    if ( emailExists == null ){
      return { emailAlredyExists : false, message: undefined};
    } 
      
    return { emailAlredyExists : true, message: "email already exists, please try other..." };
  }

  private async hashPassword(password:string) {
    return await hash(password, 12);
  }

  private async comparePassword(password:string, hash:string) {
    return await compare(password, hash);
  }

}