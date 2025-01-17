const { models } = require("../libs/sequelize")
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid")

class UsersService {
  constructor() { }

  async register(userData) {
    const { name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const validateUser = await models.User.findOne({ where: { email } });
    try {
      if (!validateUser) {
        const user = models.User.create({
          id: uuidv4(),
          name,
          email,
          password: hashedPassword
        });
        return user;
      }
    } catch (error) {
      return error;
    }
  }

  async findByEmail(email) {
    return await models.User.findOne({ where: { email } });
  }

  async findUsers() {
    try {
      return await models.User.findAll()
    } catch (error) {
      return error 
    }
  }

  async findById(id) {
    try {
      return await models.User.findByPk(id);
    } catch (error) {
      return error;
    }
  }

  async updateUser(id, data) {
    try {
      const updatedUser = await this.findById(id);
      return await updatedUser.update(data);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUser(id) {
    try {
      const model = await this.findById(id);
      await model.destroy();
      return { deleted: true };
    } catch (error) {
      console.error(error);
    }
  }
}


module.exports = UsersService; 