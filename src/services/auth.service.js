import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authRepository from "../repositories/auth.repository.js";

class AuthService {
  async register(userData) {
    const { fullName, email, password, role } = userData;

    // Check if user already exists
    const existingUser = await authRepository.findUserByEmail(email);

    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await authRepository.createUser({
      fullName,
      email,
      password: hashedPassword,
      role,
    });

    // Generate JWT

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    // Remove password before returning
    const { password: _, ...safeUser } = user;

    return {
      user: safeUser,
      token,
    };
  }
}

export default new AuthService();
