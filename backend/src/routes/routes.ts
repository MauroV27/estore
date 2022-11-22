import { Router } from 'express';

import { ProdutoDAO } from '../models/ProdutoDAO';
import { CategoriaDAO } from '../models/CategoriaDAO';
import { UserConnect } from '../controllers/managerUserSession';

const router : Router = Router();

const userConnect = new UserConnect();

router.post('/login/', userConnect.validateLogin);
router.post('/logout/', userConnect.logoutUser);

router.post('/user/', userConnect.createUser); //register
router.get('/user/', userConnect.getUser);
router.put('/user/', userConnect.updateUser);
router.delete('/user/', userConnect.deleteUser);

const produtoDAO = new ProdutoDAO();

router.post('/product/', produtoDAO.create);
router.get('/product/:id', produtoDAO.get);
router.get('/product/', produtoDAO.getAll);
router.put('/product/', produtoDAO.update);
router.delete('/product/', produtoDAO.delete);

const categoriaDAO = new CategoriaDAO();

router.post('/category/', categoriaDAO.create);
router.get('/category/:id', categoriaDAO.get);
router.put('/category/', categoriaDAO.update);
router.delete('/category/', categoriaDAO.delete);

export {router}