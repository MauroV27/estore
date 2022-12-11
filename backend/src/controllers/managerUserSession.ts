import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { UsuarioDAO } from '../models/UsuarioDAO';

const sessions: {[key: string]: number } = {};

export class UserConnect {

    public async validateLogin(request: Request, response: Response) {

        //create a user session and store session data in server memory (sessions const)

        const {login, password} = request.body;

        const {status, message, id} = await new UsuarioDAO().getUserLogin(login, password);

        if ( status == 'failed' || id <= 0 ){
            return response.json({status, message});
        }

        const userSessionId : string = uuidv4();
        sessions[ userSessionId ] = id as number;

        response.set('Set-Cookie', `session=${userSessionId}`)
        response.json({message, userSessionId})
    }

    public logoutUser(request: Request, response: Response) {
     
        const { userSessionId } = request.body;
        delete sessions[userSessionId];

        response.json({message:"user logout success."})
    }

    public async createUser(request: Request, response: Response) {

        const { name, email, password, adress, login } = request.body;

        if ( name == undefined || email == undefined || password == undefined || login == undefined ){
            return response.json({status:"failed", message:"Data failed..."});
        }

        const dataToSend : {name:string, email:string, password:string, adress:string, login:string} = { name, email, password, adress, login };

        const {status, message, data} = await new UsuarioDAO().create(dataToSend);

        if ( status == 'failed' || data == null ){
            return response.json({status, message});
        }

        response.json({status, message, data});
    }

    public async getUser(request: Request, response: Response) {
        
        const { userSessionId } = request.body;

        const userId : number | undefined = sessions[userSessionId];

        if ( userId == undefined ){
            return response.json({status:"failed", message:"User not found"});
        }

        const {status, message, data} = await new UsuarioDAO().get(userId as number);

        if ( status == 'failed' ){
            return response.json({status, message});
        }

        response.json({status, message, data});
    }

    public async updateUser(request: Request, response: Response) {
        
        const { userSessionId, name, email, password, adress, login } = request.body;

        const userId : number | undefined = sessions[userSessionId];

        if ( userId == undefined ){
            return response.json({status:"failed", message:"User not found"});
        }

        const dataToSend : {id:number, name:string, email:string, password:string, adress:string, login:string} = { 
            id : userId as number, name, email, password, adress, login 
        };

        const {status, message, data} = await new UsuarioDAO().update(dataToSend);

        if ( status == 'failed' ){
            return response.json({status, message});
        }

        return response.json({status, message, data});
    }

    public async deleteUser(request: Request, response: Response) {
        
        const { userSessionId } = request.body;

        const userId : number | undefined = sessions[userSessionId];

        if ( userId == undefined ){
            return response.json({status:"failed", message:"User session not found"});
        }

        const {status, message} = await new UsuarioDAO().delete(userId as number);

        if ( status == "success" ){
            delete sessions[userSessionId];
        }

        response.json({status, message});
    }
    
}

export function validateSession(userSessionId:string) : number|undefined {
    return sessions[userSessionId];
}