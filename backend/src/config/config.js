// src/config/config.js

require("dotenv").config();

const config = {
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  host: process.env.MYSQL_HOST,
  dialect: "mysql",
};

module.exports = {
  development: {
    ...config,
    database: "lexart_database",
  },
};
