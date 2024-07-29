const { Model, DataTypes } = require("sequelize");

const PRODUCTS_TABLE = "products";

class Product extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCTS_TABLE,
            modelName: "Product", 
            timestamps: false,
        };
    }
}

const productSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "name",
    },
    company: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "company",
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "description",
    },
    price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
        field: "price",
    },
};

module.exports = {
    Product,
    productSchema,
};
