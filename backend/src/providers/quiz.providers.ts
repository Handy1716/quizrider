import { DataSource } from 'typeorm';
import QuizEntity from '../entities/quiz.entity';

export const quizProviders = [
  {
    provide: 'QUIZ_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(QuizEntity),
    inject: ['DATA_SOURCE'],
  },
];
