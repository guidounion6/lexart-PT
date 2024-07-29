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
        const model = await models.Product.findByPk(id);
        if (!model) throw new Error('Product not found');
        return model;
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
            const product = await this.findById(id)
            if (!product) return new Error
            

            await models.Deleted.create({
                name: product.name,
                company: product.company,
                description: product.description,
                price: product.price,
            });

            await product.destroy()
            return { deleted: true };
        } catch (error) {
            return error
        }
    }

    async deleteAllProducts() {
        try {
            return await models.Product.destroy({
                where: {},
                truncate: true
            });

        } catch (error) {
            console.error("Error deleting products:", error);
            throw new Error('Failed to delete products');
        }
    }

    async findAllDeleted() {
        try {
            return await models.Deleted.findAll()
        } catch (error) {
            return error
        }
    }

}


module.exports = ProductsService;