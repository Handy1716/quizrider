import { DataSource } from 'typeorm';
import ScoreboardEntity from '../entities/scoreboard.entity';

export const scoreboardProviders = [
  {
    provide: 'SCOREBOARD_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ScoreboardEntity),
    inject: ['DATA_SOURCE'],
  },
];
