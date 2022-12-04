import { Router } from 'express';

import { connectUserRoutes } from './UserRoutes';
import { connectProductRoutes } from './ProductRoutes';
import { connectCategoryRoutes } from './CategoryRoutes';
import { connectProductCategoryRoutes } from './CategoryProductsRoutes';
import { connectSalesRoutes } from './SalesRoutes';

const router : Router = Router();

connectUserRoutes(router);
connectSalesRoutes(router);
connectProductRoutes(router);
connectCategoryRoutes(router);
connectProductCategoryRoutes(router);

export {router}