import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import Quiz from './quiz.entity';

@Entity()
export default class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  text: string;

  @ManyToMany(() => Quiz, (quiz) => quiz.tags)
  quizzes: Quiz[];
}
