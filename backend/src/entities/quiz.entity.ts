import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Creator from './creator.entity';
import Question from './question.entity';
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

  @OneToMany(() => Creator, (creator) => creator.quizzes)
    creator: Creator[]

    @OneToMany(() => Question, (question) => question.quiz)
    Questions: Question[]

}
