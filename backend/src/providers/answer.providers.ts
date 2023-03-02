import { DataSource } from 'typeorm';
import AnswerEntity from '../entities/answer.entity';

export const answerProviders = [
  {
    provide: 'ANSWER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AnswerEntity),
    inject: ['DATA_SOURCE'],
  },
];
