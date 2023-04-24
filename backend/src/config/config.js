// src/config/config.js

require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT || 3306,
  dialect: 'mysql',
  // eslint-disable-next-line global-require
  dialectModule: require('mysql2'),
};

const development = {
  ...config,
  database: process.env.MYSQL_DATABASE || 'lexart_database',
};

export default development;
