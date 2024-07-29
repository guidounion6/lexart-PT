const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products.controller")

/**
 * @swagger
 * /products/register:
 *   post:
 *     summary: Register a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               company:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Product registered successfully
 */

router.post("/register", productsController.register)
router.post("/load", productsController.loadAllProducts)
router.get("/", productsController.get)
router.get('/deleted-products', productsController.getDeletedProducts);
router.get("/:id", productsController.getById)
router.put("/:id", productsController.update)
router.delete('/:id', productsController._delete);
router.delete('/', productsController._deleteAll);


module.exports = router;