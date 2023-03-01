import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Question from './question.entity';

@Entity()
export default class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  text: string;

  @Column()
  rightAnswer: boolean;

  @ManyToOne(() => Question, (question) => question.answers)
  question: Question
}
