import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Quiz from './quiz.entity';
import Scoreboard from './scoreboard.entity';

@Entity()
export default class Runcode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 16,
    unique: true
  })
  runCode: number;
  
  @ManyToOne(() => Quiz, (quiz) => quiz.runcodes)
  quiz: Quiz;

  @OneToMany(() => Scoreboard, (scoreboard) => scoreboard.runcode)
  scoreboards: Scoreboard[]
}
