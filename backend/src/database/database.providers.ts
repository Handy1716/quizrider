import { DataSource } from 'typeorm';
import CreatorEntity from '../entities/creator.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'quiz',
        password: 'quiz',
        database: 'quiz',
        entities: [
            CreatorEntity,
        ],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
