import { 
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';
import QuizEntity from './quiz.entity';
import TagEntity from './tag.entity';

@Entity()
export default class QuizTag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
