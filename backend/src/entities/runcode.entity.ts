import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import QuizEntity from './quiz.entity';
import ScoreboardEntity from './scoreboard.entity';

@Entity()
export default class RuncodeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 16,
    unique: true
  })
  runCode: number;
  
  @ManyToOne(() => QuizEntity, (quiz) => quiz.runcodes)
  quiz: QuizEntity;

  @OneToMany(() => ScoreboardEntity, (scoreboard) => scoreboard.runcode)
  scoreboards: ScoreboardEntity[]
}
