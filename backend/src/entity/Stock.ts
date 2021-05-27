import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

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
}
