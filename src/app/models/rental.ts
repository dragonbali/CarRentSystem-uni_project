import { Stock } from './stock';
import { User } from './user';

export class Rental {
  id: number;
  startingDate: Date;
  endingDate: Date;
  isActive: boolean;
  insuranceMoney: number;
  user: User;
  stock: Stock;
}
