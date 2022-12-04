import { Router } from "express";
import { UserConnect } from "../controllers/managerUserSession";

const userConnect = new UserConnect();

export function connectUserRoutes(router:Router) {
    router.post('/login/', userConnect.validateLogin);
    router.post('/logout/', userConnect.logoutUser);

    router.post('/user/', userConnect.createUser); //register
    router.post('/register/', userConnect.createUser);
    
    router.get('/user/', userConnect.getUser);
    router.put('/user/', userConnect.updateUser);
    router.delete('/user/', userConnect.deleteUser);
}