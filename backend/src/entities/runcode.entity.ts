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

@Entity({ name: 'runcode' })
export default class RuncodeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  runCode: string;
  
  @ManyToOne(() => QuizEntity, (quiz) => quiz.runcodes, {
    onDelete: 'CASCADE',
    eager: true,
  })
  quiz: QuizEntity;

  @OneToMany(() => ScoreboardEntity, (scoreboard) => scoreboard.runCode)
  scoreboards: ScoreboardEntity[]
}
