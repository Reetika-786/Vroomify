import mongoose from "mongoose";
import User from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// ---------------- CONFIG -----------------
const JWT_SECRET = process.env.JWT_SECRET || "ur jwt secret";
const TOKEN_EXPIRES_IN = "24h";

// Create token function
const createToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: TOKEN_EXPIRES_IN,
  });
};

// ---------------- REGISTER -----------------
export async function register(req, res) {
  try {
    const name = String(req.body.name || "").trim();
    const emailRaw = String(req.body.email || "").trim();
    const email =
      validator.normalizeEmail(emailRaw) || emailRaw.toLowerCase();
    const password = String(req.body.password || "");

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    const exists = await User.findOne({ email }).lean();
    if (exists) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = createToken(user._id);

    return res.status(201).json({
      success: true,
      message: "Account created successfully!",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Register error", err);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}

// ---------------- LOGIN -----------------
export async function login(req, res) {
  try {
    const emailRaw = String(req.body.email || "").trim();
    const email =
      validator.normalizeEmail(emailRaw) || emailRaw.toLowerCase();
    const password = String(req.body.password || "");

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });

    const token = createToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login error", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}
