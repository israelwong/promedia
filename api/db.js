import { createPool } from "mysql2/promise";
import {
    PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
} from './config.js'

export const pool = createPool({
    port: PORT,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
})
