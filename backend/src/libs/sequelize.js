const { Sequelize } = require("sequelize");
const { config } = require("../config/config");

const setupModels = require("../models");

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Note: you might want to adjust this for your production setup
    }
  },
  logging: false,
});

setupModels(sequelize);
sequelize.sync();

module.exports = sequelize;
