import { DataSource } from 'typeorm';
import Creator from '../entities/creator.entity';

export const creatorProviders = [
  {
    provide: 'CREATOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Creator),
    inject: ['DATA_SOURCE'],
  },
];
