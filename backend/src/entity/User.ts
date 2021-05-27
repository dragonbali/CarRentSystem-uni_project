import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Rental } from './Rental';

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
  address: string;

  @Column()
  phone: string;

  @OneToMany((type) => Rental, (rental) => rental.id) rentals: Rental[];
}
