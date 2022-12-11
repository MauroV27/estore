import { Router } from 'express';

import { connectUserRoutes } from './UserRoutes';
import { connectProductRoutes } from './ProductRoutes';
import { connectCategoryRoutes } from './CategoryRoutes';
import { connectProductCategoryRoutes } from './CategoryProductsRoutes';
import { connectSalesRoutes } from './SalesRoutes';
import { connectSalesProductsRoutes } from './SalesProductsRoutes';

const router : Router = Router();

connectUserRoutes(router);
connectSalesRoutes(router);
connectProductRoutes(router);
connectCategoryRoutes(router);
connectSalesProductsRoutes(router);
connectProductCategoryRoutes(router);

export {router}