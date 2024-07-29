require("dotenv").config();

const {
  POSTGRES_URL,
  NODE_ENV,
  PORT,
} = process.env;

const config = {
  dbUrl: POSTGRES_URL,
  port: PORT || 3000,
  env: NODE_ENV || "development",
};

module.exports = { config };
