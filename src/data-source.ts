/* import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'Mydb1234@',
  database: process.env.DB_DATABASE || 'capstone',
  entities: [path.resolve(__dirname, '**', '*.entity.{ts,js}')],
  migrations: [path.resolve(__dirname, 'migrations', '*.ts')],
  migrationsTableName: 'migrations_history',
  synchronize: false,
  logging: true,
});
 */