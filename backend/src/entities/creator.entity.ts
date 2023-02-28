import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Question from './question.entity';
import Quiz from './quiz.entity';

@Entity()
export default class Creator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column({
    length: 100,
  })
  email: string;

  @Column({
    length: 100,
  })
  password: string;

  @OneToMany(() => Quiz, (quiz) => quiz.creator)
    quizzes: Quiz[]
}
