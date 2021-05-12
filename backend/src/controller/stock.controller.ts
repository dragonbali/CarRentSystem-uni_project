import { getRepository } from 'typeorm';
import { Stock } from '../entity/Stock';
import { Controller } from './controller';

export class StockController extends Controller {
  repository = getRepository(Stock);
}
