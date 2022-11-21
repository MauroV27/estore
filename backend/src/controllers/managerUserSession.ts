import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { UsuarioDAO } from '../models/UsuarioDAO';

const sessions: {[key: string]: number } = {};

export class UserConnect {

    private userDao : UsuarioDAO

    public constructor(){
        this.userDao = new UsuarioDAO();
    }

    public async validateLogin(request: Request, response: Response) {

        //create a user session and stroe session data in server memory

        const {login, password} = request.body;

        const {status, message, id} = await this.userDao.getUserLogin(login, password);

        if ( status == 'failed' || id <= 0 ){
            return response.json({status, message});
        }

        const userSession : string = uuidv4();
        sessions[ userSession ] = id as number;

        response.set('Set-Cookie', `session=${userSession}`)
        response.json({message, userSession})
    }

    public logoutUser(request: Request, response: Response) {
     
        const { userSession } = request.body;
        delete sessions[userSession]

        response.json({message:"user logout success."})
    }

    public async getUser(request: Request, response: Response) {
        
        const { userSessionId } = request.body;

        const userId = sessions[userSessionId];

        const {status, message, data} = await this.userDao.get(userId as number);

        if ( status == 'failed' ){
            return response.json({status, message});
        }

        response.json(data);
    }

    public async updateUser(request: Request, response: Response) {
        
        const { userSessionId, name, email, password, adress, login } = request.body;

        const userId = sessions[userSessionId];

        const {status, message, data} = await this.userDao.update({
            id : userId as number, 
            name, 
            email, 
            password, 
            adress, 
            login
        });

        if ( status == 'failed' ){
            return response.json({status, message});
        }

        return response.json({status, message, data});
    }

}