import { Router } from 'express';

import { UsuarioDAO } from '../models/UsuarioDAO';
import { ProdutoDAO } from '../models/ProdutoDAO';

const router : Router = Router();

const usuarioDAO = new UsuarioDAO();

router.get('/user/:id', usuarioDAO.get);
router.post('/user/', usuarioDAO.create);

const produtoDAO = new ProdutoDAO();

router.post('/product/', produtoDAO.createProduct);
router.get('/product/:id', produtoDAO.getProductDataByID);
router.put('/product/:id', produtoDAO.updateProduct);
router.delete('/product/:id', produtoDAO.removeProduct);

export {router}