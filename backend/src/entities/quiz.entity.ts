import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import CreatorEntity from './creator.entity';
import QuestionEntity from './question.entity';
import RunCode from './runcode.entity';
import TagEntity from './tag.entity';

@Entity({ name: 'quiz' })
export default class QuizEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  name: string;

  @Column()
  public: boolean;

  @Column()
  oneRound: boolean;

  @ManyToOne(() => CreatorEntity, (creator) => creator.quizzes)
  creator: CreatorEntity

  @OneToMany(() => QuestionEntity, (question) => question.quiz, {
    eager: true,
    cascade: true
  })
  questions: QuestionEntity[]

  @OneToMany(() => RunCode, (runcode) => runcode.quiz)
  runcodes: RunCode[]

  @ManyToMany(() => TagEntity, (tag) => tag.quizzes, {
    eager: true,
    cascade: ['update']
  })
  @JoinTable()
  tags: TagEntity[]
}
