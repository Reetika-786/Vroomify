import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({
      success: false,
      message: 'Not authorised, token missing',
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    // Fetch full user (EXCLUDING password)
    const user = await User.findById(payload.id).select('-password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found',
      });
    }

    req.user = user; // attach logged-in user
    return next();   // 🟢 important
  } catch (error) {
    console.error('JWT verification failed', error);
    return res.status(401).json({
      success: false,
      message: 'Token missing invalid or expired',
    });
  }
}
