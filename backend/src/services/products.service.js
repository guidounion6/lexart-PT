const { models } = require("../libs/sequelize")
const { Op } = require('sequelize')
const { v4: uuidv4 } = require("uuid")

class ProductsService {
    constructor() { }

    async register(productData) {
        try {
            const { name, company, description, price } = productData
            const product = await models.Product.create({
                id: uuidv4(),
                name,
                company,
                description,
                price
            })
            return product
        } catch (error) {
            return error
        }
    }


    async findAllProducts() {
        try {
            return await models.Product.findAll()
        } catch (error) {
            return error
        }
    }

    async loadAllProducts(data) {
        try {
            const products = await models.Product.bulkCreate(data);
            return products;
        } catch (error) {
            console.error("Error loading products:", error);
            throw new Error('Failed to load products');
        }
    };

    async findById(id) {
        try {
            return await models.Product.findByPk(id)
        } catch (error) {
            return error
        }
    }

    async getProductsByName(name) {
        try {
            console.log(`Searching for products with name like: %${name}%`);
            const prod = await  models.Product.findAll({ where: { name:
                {[Op.like] :`%${name}%`} } })
            return prod;
        } catch (error) {
            console.error(error);
            throw new Error("No products found");
        }
    }
    
    

    async updateProduct(id, data) {
        try {
            const updatedProduct = await this.findById(id);
            return await updatedProduct.update(data);
        } catch (error) {
            console.error(error);
        }
    }

    async deleteProduct(id) {
        try {
            const model = await this.findById(id)
            await model.destroy()
            return { deleted: true };
        } catch (error) {
            return error
        }
    }

    async deleteAllProducts() {
        try {
            console.log("estoy en el service")
            const deletedCount = await models.Product.destroy({
                where: {},
                truncate: true
            });
            if (deletedCount === 0) {
                console.log("No products were deleted.");
                throw new Error("No products found to delete.");
            }
            console.log(`${deletedCount} products were deleted.`);
            return { deletedCount };
        } catch (error) {
            console.error("Error deleting products:", error);
            throw new Error('Failed to delete products');
        }
    }

}


module.exports = ProductsService;