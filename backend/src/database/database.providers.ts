import { ConfigModule, ConfigService } from '@nestjs/config';
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
    useFactory: async (configService : ConfigService) => {
      const dataSource = new DataSource({
        type: "mysql",
        host: configService.getOrThrow("DB_HOST"),
        port: configService.getOrThrow("DB_PORT"),
        username: configService.getOrThrow("DB_USER"),
        password: configService.getOrThrow("DB_PASS"),
        database: configService.getOrThrow("DB_NAME"),
        entities: [
            CreatorEntity, QuizEntity, QuestionEntity, AnswerEntity, RuncodeEntity, ScoreboardEntity, TagEntity,  
        ],
        synchronize: true,
        // debug: true,
      });
      return dataSource.initialize();
    },
    imports: [ConfigModule],
    inject: [ConfigService],
  },
];
