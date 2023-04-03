import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { VirtualColumn } from 'typeorm/decorator/columns/VirtualColumn';
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

  @VirtualColumn({ query: (alias) => `SELECT COUNT(*) FROM quiz_tags_tag WHERE tagId = ${alias}.id` })
  counts: number;

}
