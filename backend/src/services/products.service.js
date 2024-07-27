const { models } = require("../libs/sequelize")
const { v4: uuidv4 } = require("uuid")

class ProductsService{
    constructor () {}

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

async findById(id) {
    try {
        return await models.Product.findByPk(id)
    } catch (error) {
        return error
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
        return { deleted: true}; 
    } catch (error) {
        return error
    }
}

}


module.exports = ProductsService;