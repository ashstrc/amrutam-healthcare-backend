import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authRepository from "../repositories/auth.repository.js";
import {
  emitUserRegistered,
  emitUserLoggedIn,
} from "../events/emitters/auth.emitter.js";

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

    // ✅ Create Audit Log
    emitUserRegistered({
      userId: user.id,
    });

    // Remove password before returning
    const { password: _, ...safeUser } = user;

    return {
      user: safeUser,
      token,
    };
  }

  async login(loginData) {
    const { email, password } = loginData;

    // Find user
    const user = await authRepository.findUserByEmail(email);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Check account status
    if (!user.isActive) {
      throw new Error("Your account has been deactivated");
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

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

    // ✅ Create Audit Log
    emitUserLoggedIn({
      userId: user.id,
    });

    // Remove password
    const { password: _, ...safeUser } = user;

    return {
      user: safeUser,
      token,
    };
  }

  async getProfile(userId) {
    const user = await authRepository.findUserById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const { password, ...safeUser } = user;

    return safeUser;
  }

  async changePassword(userId, currentPassword, newPassword) {
    const user = await authRepository.findUserById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new Error("Current password is incorrect");
    }

    if (currentPassword === newPassword) {
      throw new Error("New password cannot be the same as current password");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await authRepository.updatePassword(userId, hashedPassword);

    return {
      message: "Password changed successfully",
    };
  }
}

export default new AuthService();
