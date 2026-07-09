import authService from "../services/auth.service.js";

class AuthController {
  async register(req, res) {
    try {
      const result = await authService.register(req.body);

      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: {
          user: result.user,
          accessToken: result.token,
        },
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new AuthController();
