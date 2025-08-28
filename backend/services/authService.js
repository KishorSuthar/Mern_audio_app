import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import { hashPassword, comparePassword } from '../utils/bcrypt.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

export const register = async ({ email, username, password }) => {
  const userExists = await User.findOne({ $or: [{ email }, { username }] });
  if (userExists) {
    throw new Error('User already exists');
  }

  const hashedPassword = await hashPassword(password);
  const user = new User({ email, username, password: hashedPassword });

  const token = generateToken(user._id);
  user.token = token;

  await user.save();

  return { user, token };
};

export const login = async ({ username, email, password }) => {
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = generateToken(user._id);
  user.token = token;

  await user.save();

  return { token };
};
