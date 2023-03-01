import {
  Column,
  Entity,
  OneToMany,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Creator from './creator.entity';
import Question from './question.entity';
import QuizTag from './quizTag.entity';
import RunCode from './runcode.entity';
import Tag from './tag.entity';

@Entity()
export default class Quiz {
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

  @OneToMany(() => Creator, (creator) => creator.quizzes)
  creator: Creator[]

  @OneToMany(() => Question, (question) => question.quiz)
  questions: Question[]

  @OneToMany(() => RunCode, (runcode) => runcode.quiz)
  runcodes: RunCode[]
  
  @ManyToMany(() => Tag, (tag) => tag.quizzes)
  @JoinTable()
  tags: Tag[]
}
