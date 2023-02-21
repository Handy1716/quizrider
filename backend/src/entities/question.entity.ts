import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Quiz from './quiz.entity';

@Entity()
export default class Quiestion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;
}
