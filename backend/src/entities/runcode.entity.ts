import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Quiz from './quiz.entity';

@Entity()
export default class RunCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  runCode: number;

  @ManyToOne(() => Quiz, (quiz) => quiz.runcodes)
  quiz: Quiz;
}
