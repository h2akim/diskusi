import { DataSource } from "typeorm";
import { database as config } from "@config/database";

const dataSource = {
	type: config.dialect as any,
	host: config.host,
	port: config.port as number,
	username: config.username,
	password: config.password,
	database: config.database,
	migrationsRun: true,
	synchronize: true,
	logging: true,
	entities: [__dirname + "/../models/*.ts"],
	migrations: [__dirname + "/../database/migrations/*.ts"],
};

export const AppDatabase = new DataSource(dataSource);

AppDatabase.initialize();