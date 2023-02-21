import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Quiestion from './question.entity';

@Entity()
export default class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  rightAnswer: boolean;

  @OneToOne(() => Quiestion)
  @JoinColumn()
  question: Quiestion;
}
