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
  runCode: number;
  
  @ManyToOne(() => QuizEntity, (quiz) => quiz.runcodes, {
    onDelete: 'CASCADE'
  })
  quiz: QuizEntity;

  @OneToMany(() => ScoreboardEntity, (scoreboard) => scoreboard.runcode)
  scoreboards: ScoreboardEntity[]
}
