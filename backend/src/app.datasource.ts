import { DataSource } from "typeorm";
import Creator from "./entities/creator.entity";

const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'quiz',
    password: 'quiz',
    database: 'quiz',
    entities: [
        Creator
    ],
    synchronize: true,
    logging: true,
});

AppDataSource.initialize();
