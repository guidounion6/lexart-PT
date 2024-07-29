const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const setupModels = require("./src/models");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./src/routes/swagger");

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const routerApi = require("./src/routes");

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

routerApi(app);

app.get("/", (req, res) => {
  res.send("Backend with Node + Express + PostgreSQL");
});

const sequelize = new Sequelize(config.dbUrl, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  },
  logging: false,
});

setupModels(sequelize);

sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync();
  })
  .then(() => {
    console.log("Database synchronized");
    app.listen(port, () => {
      console.log(`Backend is running on port ${port} \nhttp://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
