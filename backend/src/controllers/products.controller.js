const fs = require("fs")
const path = require("path")
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

const loadAllProducts = async (req, res) => {
    try {
        const dataPath = path.join(__dirname, '../api/loadInfoToDb.js');
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

        const products = await productsService.loadAllProducts(data);
        res.status(200).json({ message: "Data loaded successfully", products });
    } catch (error) {
        console.error("Error loading data:", error);
        res.status(500).json({ message: "Failed to load data", error: error.message });
    }
};

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

const getByName = async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ message: "Name query parameter is required" });
        }

        const product = await getProductsByName(name.toLowerCase());
        if (product.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }

        res.status(200).json({ message: "Items found", product });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


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

const _deleteAll = async (req, res) => {
    try {
        const result = await productsService.deleteAllProducts();
        res.status(200).json({ message: "All products deleted successfully", response: result });
    } catch (error) {
        console.error("Error deleting all products:", error);
        res.status(500).json({ message: "Failed to delete products", error: error.message });
    }
};

module.exports = {
    register,
    loadAllProducts,
    get,
    getById,
    getByName,
    update,
    _delete,
    _deleteAll
}