import { Router } from 'express';

import { UsuarioDAO } from '../models/UsuarioDAO';
import { ProdutoDAO } from '../models/ProdutoDAO';
import { CategoriaDAO } from '../models/CategoriaDAO';

const router : Router = Router();

const usuarioDAO = new UsuarioDAO();

router.post('/user/', usuarioDAO.create);
router.get('/user/:id', usuarioDAO.get);
router.put('/user/:id', usuarioDAO.update);
router.delete('/user/:id', usuarioDAO.delete);

const produtoDAO = new ProdutoDAO();

router.post('/product/', produtoDAO.create);
router.get('/product/:id', produtoDAO.get);
router.put('/product/:id', produtoDAO.update);
router.delete('/product/:id', produtoDAO.delete);

const categoriaDAO = new CategoriaDAO();

router.post('/category/', categoriaDAO.create);
router.get('/category/:id', categoriaDAO.get);
router.put('/category/:id', categoriaDAO.update);
router.delete('/category/:id', categoriaDAO.delete);

export {router}