import { DataSource } from 'typeorm';
import RuncodeEntity from '../entities/runcode.entity';

export const runcodeProviders = [
  {
    provide: 'RUNCODE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(RuncodeEntity),
    inject: ['DATA_SOURCE'],
  },
];
