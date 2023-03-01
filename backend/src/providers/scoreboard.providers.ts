import { DataSource } from 'typeorm';
import Scoreboard from '../entities/scoreboard.entity';

export const creatorProviders = [
  {
    provide: 'SCOREBOARD_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Scoreboard),
    inject: ['DATA_SOURCE'],
  },
];
