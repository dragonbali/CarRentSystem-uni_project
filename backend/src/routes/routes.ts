import { Router } from 'express';
import { StockController } from '../controller/stock.controller';
import { UserController } from '../controller/user.controller';
import { RentalController } from '../controller/rental.controller';

export function getRouter(): Router {
  const router = Router();

  const stockController = new StockController();
  const userController = new UserController();
  const rentalController = new RentalController();

  router.get('/getStocks', stockController.getAll);
  router.get('/getStock/:id', stockController.getOne);
  router.post('/addStock', stockController.create);

  router.get('/getUsers', userController.getAll);
  router.get('/getUser/:id', userController.getOne);
  router.post('/addUser', userController.create);

  router.get('/getRentals', rentalController.getAll);
  router.get('/getRental/:id', rentalController.getOne);
  router.post('/addRental', rentalController.create);
  router.put('/updateRental', rentalController.update);

  return router;
}
