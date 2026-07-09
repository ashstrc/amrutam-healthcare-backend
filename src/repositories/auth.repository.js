import prisma from "../config/prisma.js";

class AuthRepository {
  async findUserByEmail(email) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async createUser(data) {
    return await prisma.user.create({
      data,
    });
  }
}

export default new AuthRepository();
