import authService from "../services/auth.service.js";
import asyncHandler from "../utils/asyncHandler.js";

class AuthController {
  register = asyncHandler(async (req, res) => {
    const result = await authService.register(req.body);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: result.user,
        accessToken: result.token,
      },
    });
  });

  login = asyncHandler(async (req, res) => {
    const result = await authService.login(req.body);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user: result.user,
        accessToken: result.token,
      },
    });
  });

  profile = asyncHandler(async (req, res) => {
    const user = await authService.getProfile(req.user.id);

    res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: user,
    });
  });

  changePassword = asyncHandler(async (req, res) => {
    const { currentPassword, newPassword } = req.body;

    const result = await authService.changePassword(
      req.user.id,
      currentPassword,
      newPassword,
    );

    res.status(200).json({
      success: true,
      message: result.message,
    });
  });
}

export default new AuthController();
