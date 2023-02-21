import { DataSource } from 'typeorm';
import Creator from 'src/entities/creator.entity';

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
            Creator,
        ],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
