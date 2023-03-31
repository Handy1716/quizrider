import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import AnswerEntity from './answer.entity';
import QuizEntity from './quiz.entity';

@Entity({ name: 'question' })
export default class QuestionEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  text: string;

  @ManyToOne(() => QuizEntity, (quiz) => quiz.questions)
  quiz: QuizEntity

  @OneToMany(() => AnswerEntity, (answer) => answer.question, {
    eager: true,
    cascade: true
  })
  answers: AnswerEntity[]
}
