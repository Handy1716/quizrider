import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Creator from './creator.entity';
import Quiestion from './question.entity';
import QuizTag from './quizTag.entity';
import RunCode from './runcode.entity';

@Entity()
export default class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  public: boolean;

  @Column()
  oneRound: boolean;

  @OneToOne(() => Creator)
  @JoinColumn()
  creator: Creator;

  @OneToMany(() => RunCode, (runcode) => runcode.quiz)
  runcodes: RunCode[];

  @OneToMany(() => Quiestion, (question) => question.quiz)
  questions: Quiestion[];

  @OneToMany(() => QuizTag, (quizTags) => quizTags.quiz)
  quizTags: QuizTag[];
}
