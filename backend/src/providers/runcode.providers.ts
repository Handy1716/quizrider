import { DataSource } from 'typeorm';
import Runcode from '../entities/runcode.entity';

export const runcodeProviders = [
  {
    provide: 'RUNCODE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Runcode),
    inject: ['DATA_SOURCE'],
  },
];
