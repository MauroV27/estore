import { Router } from 'express';

import { UsuarioDAO } from '../models/UsuarioDAO';

const router : Router = Router();

const usuarioDAO = new UsuarioDAO();

router.get('/user/:id', usuarioDAO.get);
router.post('/user/', usuarioDAO.create);

export {router}