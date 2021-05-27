import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Rental } from '../entity/Rental';
import { Controller } from './controller';

export class RentalController extends Controller {
  repository = getRepository(Rental);
}
