import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Answer from './answer.entity';
import Quiz from './quiz.entity';

@Entity()
export default class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  text: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
    quiz: Quiz

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[]
}
