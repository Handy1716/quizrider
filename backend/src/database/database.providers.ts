import { DataSource } from 'typeorm';

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
            __dirname + '/../entities/*.entity.ts',
        ],
        synchronize: true,
        debug: true,
      });
      return dataSource.initialize();
    },
  },
];
