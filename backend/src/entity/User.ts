import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Stock } from './Stock';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  IDNumber: string;

  @Column()
  phone: string;

  @OneToMany((type) => Stock, (stock) => stock.id) stocks: Stock[];
}
