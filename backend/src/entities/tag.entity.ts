import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import QuizEntity from './quiz.entity';

@Entity({ name: 'tag' })
export default class TagEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    unique: true
  })
  text: string;

  @ManyToMany(() => QuizEntity, (quiz) => quiz.tags)
  quizzes: QuizEntity[];
}
