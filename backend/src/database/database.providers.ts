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
            '../entities/*.entity.ts'
        ],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
