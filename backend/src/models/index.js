const { User, userSchema } = require("./users.model");
const { Product, productSchema } = require("./products.model");
const { Deleted, deletedSchema } = require("./deletedProduct.model")

function setupModels(sequelize) {
    User.init(userSchema, User.config(sequelize));
    Product.init(productSchema, Product.config(sequelize));
    Deleted.init(deletedSchema, Deleted.config(sequelize));
}

module.exports = setupModels;
