import { DataSource } from 'typeorm';
import QuizTag from '../entities/quizTag.entity';

export const quizTagProviders = [
  {
    provide: 'QUIZTAG_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(QuizTag),
    inject: ['DATA_SOURCE'],
  },
];
