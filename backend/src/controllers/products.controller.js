const { trace } = require("../routes/users.router");
const ProductsService = require("../services/products.service")

const productsService = new ProductsService();

require("dotenv").config()


const register = async (req, res) => {
    try {
        const product = await productsService.register(req.body)
        res.status(201).json({ message: "Product registered succcesfully", product })
    } catch (error) {
        res.status(400).json({ message: "Error registering product", error })
    }
}

const get = async (req, res) => {
    try {
        const allProducts = await productsService.findAllProducts()
        res.status(200).json({ message: "These are all the products", allProducts })
    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await productsService.findById(id)
        res.status(200).json({ message: `The product with the id, ${id} is:`, product })
    } catch (error) {
        res.status(400).send({ message: `Error finding the product with the id: ${id}`, error })
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const updateProduct = await productsService.updateProduct(id, body)
        res.status(200).json({ message: `The product with the id, ${id}, updated `, updateProduct })
    } catch (error) {
        res.status(500).send({ success: false, message: error.message })
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await productsService.deleteProduct(id)
        res.json({ message: "Product deleted successfuly", response })

    } catch (error) {
        res.json(500).send({ success: false, message: error.message })
    }
}

module.exports = {
    register,
    get,
    getById,
    update,
    _delete
}