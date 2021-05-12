import { Router } from 'express';
import { StockController } from '../controller/stock.controller';
import { UserController } from '../controller/user.controller';

export function getRouter(): Router {
  const router = Router();

  const stockController = new StockController();
  const userController = new UserController();

  router.get('/getStocks', stockController.getAll);
  router.get('/getStock/:id', stockController.getOne);
  router.post('/addStock', stockController.create);

  router.get('/getUsers', userController.getAll);
  router.post('/addUser', userController.create);

  return router;
}
