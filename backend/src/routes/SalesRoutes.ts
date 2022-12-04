import { Router } from "express";
import { SalesController } from "../controllers/managerSales";

const salesConnect = new SalesController();

export function connectSalesRoutes(router:Router) {
    router.post('/registerSale/', salesConnect.createSale);
    
    router.get('/sale/', salesConnect.getSale);
    router.get('/salesFromUser/', salesConnect.getAllUserSales);
    router.delete('/sale/', salesConnect.deleteSale);
}