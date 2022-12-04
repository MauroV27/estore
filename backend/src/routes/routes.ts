import { Router } from 'express';

import { connectUserRoutes } from './UserRoutes';
import { connectProductRoutes } from './ProductRoutes';
import { connectCategoryRoutes } from './CategoryRoutes';
import { connectProductCategoryRoutes } from './CategoryProductsRoutes';

// import { VendaDAO } from '../models/VendaDAO'; //teste

const router : Router = Router();

connectUserRoutes(router);
connectProductRoutes(router);
connectCategoryRoutes(router);
connectProductCategoryRoutes(router);

// router.post('/sales/', async (req, res) => {
//     // problema no postrgress está impedindo de funcionar [BUG][CRITICAL]
//     const {userId} = req.body;

//     if ( userId != null || userId != undefined ){

//         const {status, message, data} = await new VendaDAO().create(userId as number);

//         res.json({status, message, data});
//     }
// })

// router.get('/sales/', async (req, res) => {
//     // problema no postrgress está impedindo de funcionar [BUG][CRITICAL]
//     const {vendaid} = req.body;

//     if ( vendaid != null || vendaid != undefined ){

//         const {status, message, data} = await new VendaDAO().getOne(vendaid as number);

//         res.json({status, message, data});
//     }
// })

export {router}