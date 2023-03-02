import { DataSource } from 'typeorm';
import CreatorEntity from '../entities/creator.entity';

export const creatorProviders = [
  {
    provide: 'CREATOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CreatorEntity),
    inject: ['DATA_SOURCE'],
  },
];
