import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Quiz from './quiz.entity';
import Scoreboard from './scoreboard.entity';

@Entity()
export default class Runcode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  runCode: number;
  
    @OneToOne(() => Quiz)
    @JoinColumn()
    quiz: Quiz
}
