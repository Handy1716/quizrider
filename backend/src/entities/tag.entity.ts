import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import QuizTag from './quizTag.entity';

@Entity()
export default class Tag {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;

  @OneToMany(() => QuizTag, (quizTags) => quizTags.tag)
  quizTags: QuizTag[];
}
