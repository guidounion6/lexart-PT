const { Model, DataTypes } = require("sequelize")

    const DELETED_TABLE = "deleted"

    class Deleted extends Model {
        static config(sequelize){
            return {
                sequelize, 
                tableName: DELETED_TABLE,
                modelname: "Deleted",
                timestamps: false
            }
        }
    }

    const deletedSchema = {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          company: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
          },
          status: {
            type: DataTypes.ENUM("Deleted")
          }
    }

    module.exports = {
        Deleted,
        deletedSchema
    }