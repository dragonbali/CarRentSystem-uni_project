import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Rental } from './Rental';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  manufacturer: string;

  @Column()
  plateNumber: string;

  @Column()
  chassisNumber: string;

  @Column()
  dateOfPurchase: Date;

  @Column()
  serialNumber: number;

  @Column()
  price: number;

  @Column()
  mileage: number;

  @Column()
  available: boolean;

  @OneToMany((type) => Rental, (rental) => rental.id) rentals: Rental[];
}
