import AnswerEntity from 'src/entities/answer.entity';
import CreatorEntity from 'src/entities/creator.entity';
import QuestionEntity from 'src/entities/question.entity';
import QuizEntity from 'src/entities/quiz.entity';
import RuncodeEntity from 'src/entities/runcode.entity';
import ScoreboardEntity from 'src/entities/scoreboard.entity';
import TagEntity from 'src/entities/tag.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'quiz',
        password: 'quiz',
        database: 'quiz',
        entities: [
            CreatorEntity, QuizEntity, QuestionEntity, AnswerEntity, RuncodeEntity, ScoreboardEntity, TagEntity,  
        ],
        synchronize: true
      });
      return dataSource.initialize();
    },
  },
];
