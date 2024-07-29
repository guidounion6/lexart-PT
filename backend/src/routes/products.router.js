const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products.controller")

router.post("/register", productsController.register)
router.post("/load", productsController.loadAllProducts)
router.get("/", productsController.get)
router.get('/deleted-products', productsController.getDeletedProducts);
router.get("/:id", productsController.getById)
router.put("/:id", productsController.update)
router.delete('/:id', productsController._delete);
router.delete('/', productsController._deleteAll);


module.exports = router;