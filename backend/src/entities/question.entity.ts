import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Answer from './answer.entity';
import Quiz from './quiz.entity';

@Entity()
export default class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.Questions)
    quiz: Quiz

  @OneToMany(() => Answer, (answer) => answer.question)
    answers: Answer[]
}
