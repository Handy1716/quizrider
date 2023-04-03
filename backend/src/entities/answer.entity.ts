import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import QuestionEntity from './question.entity';

@Entity({ name: 'answer'} )
export default class AnswerEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  text: string;

  @Column()
  rightAnswer: boolean;

  @ManyToOne(() => QuestionEntity, (question) => question.answers, {
    onDelete: 'CASCADE'
  })
  question: QuestionEntity
}
