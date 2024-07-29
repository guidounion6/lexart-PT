const express = require("express");
const router = express.Router();


const usersController = require("../controllers/users.controller")

/**
 * @swagger
 * /users/register: 
 *   post: 
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody: 
 *       required: true
 *       content: 
 *         application/json: 
 *           schema: 
 *             type:object
 *             properties: 
 *               username:
 *                 type:string
 *               password: 
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 */

router.post("/register", usersController.register);
/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 */
router.post("/login", usersController.login);
router.post("/refresh-token", usersController.refreshToken);
router.get("/", usersController.get)
router.get("/:id", usersController.getById)
router.put("/:id", usersController.update)
router.delete("/:id", usersController._delete)

module.exports = router;