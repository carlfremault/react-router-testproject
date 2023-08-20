import mysql from 'mysql';
import 'dotenv/config';

let connection: any = null;

function getConnection() {
  if (!connection) {
    connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }
  return connection;
}

try {
  getConnection();
  console.log('Database connected!');
} catch (error) {
  console.log('Database connection failed: ', error);
}

const db = getConnection();
export default db;
