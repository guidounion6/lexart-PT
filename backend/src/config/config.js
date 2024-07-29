require("dotenv").config();

const pg = require('pg');

const { Pool } = require("pg");

const {
  POSTGRES_DATABASE,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOST,
  DB_PORT,
  NODE_ENV,
  PORT,
} = process.env;

const config = {
  dbName: POSTGRES_DATABASE,
  dbUser: POSTGRES_USER,
  dbPassword: POSTGRES_PASSWORD,
  dbHost: POSTGRES_HOST,
  dbPort: DB_PORT || 5432,
  port: PORT || 3000,
  env: NODE_ENV || "development",
};

module.exports = { config };
