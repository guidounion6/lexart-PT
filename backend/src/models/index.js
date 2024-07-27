const { User, userSchema } = require("./users.model");
const { Product, productSchema } = require("./products.model");

function setupModels(sequelize) {
    User.init(userSchema, User.config(sequelize));
    Product.init(productSchema, Product.config(sequelize));
}

module.exports = setupModels;
