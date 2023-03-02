import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';
import CreatorEntity from './creator.entity';
import QuestionEntity from './question.entity';
import RunCode from './runcode.entity';
import TagEntity from './tag.entity';

@Entity()
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

  @OneToMany(() => QuestionEntity, (question) => question.quiz)
  questions: QuestionEntity[]

  @OneToMany(() => RunCode, (runcode) => runcode.quiz)
  runcodes: RunCode[]
  
  @ManyToMany(() => TagEntity, (tag) => tag.quizzes)
  @JoinTable()
  tags: TagEntity[]
}
