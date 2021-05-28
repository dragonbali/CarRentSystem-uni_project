import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User';
import { Stock } from './Stock';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startingDate: Date;

  @Column()
  endingDate: Date;

  @Column({ default: false })
  isActive: boolean;

  @Column()
  insuranceMoney: number;

  @ManyToOne((type) => User, { eager: true, cascade: true }) user: User;

  @ManyToOne((type) => Stock, { eager: true, cascade: true }) stock: Stock;
}
