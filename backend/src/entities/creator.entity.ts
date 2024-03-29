import { classToPlain, Exclude, instanceToPlain } from 'class-transformer';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import QuestionEntity from './question.entity';
import QuizEntity from './quiz.entity';

@Entity({ name: 'creator' })
export default class CreatorEntity extends BaseEntity {
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
    length: 100
  })
  @Exclude({ toPlainOnly: true })
  password: string;

  @OneToMany(() => QuizEntity, (quiz) => quiz.creator)
  quizzes: QuizEntity[];

  toJSON() {
    return instanceToPlain(this);
  }

}
