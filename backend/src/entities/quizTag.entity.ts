import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Quiz from './quiz.entity';
import Tag from './tag.entity';

@Entity()
export default class QuizTag {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Quiz, (quiz) => quiz.quizTags)
  quiz: Quiz;

  @ManyToOne(() => Tag, (tag) => tag.quizTags)
  tag: Tag;
}
