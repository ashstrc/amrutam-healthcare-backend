import prisma from "../config/prisma.js";

class AuthRepository {
  async findUserByEmail(email) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findUserById(id) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async createUser(data) {
    return await prisma.user.create({
      data,
    });
  }

  async updatePassword(userId, hashedPassword) {
    return await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password: hashedPassword,
      },
    });
  }
}

export default new AuthRepository();
