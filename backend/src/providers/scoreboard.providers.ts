import { DataSource } from 'typeorm';
import ScoreboardEntity from '../entities/scoreboard.entity';

export const creatorProviders = [
  {
    provide: 'SCOREBOARD_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ScoreboardEntity),
    inject: ['DATA_SOURCE'],
  },
];
