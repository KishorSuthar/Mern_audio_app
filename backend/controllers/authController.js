import { register as registerService, login as loginService } from '../services/authService.js';

export const register = async (req, res) => {
  try {
    const { token } = await registerService(req.body);
    res.status(201).json({ message: 'User created successfully', token });
  } catch (err) {
    const status = err.message === 'User already exists' ? 400 : 500;
    res.status(status).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { token } = await loginService(req.body);
    res.json({ token });
  } catch (err) {
    const status = err.message === 'Invalid credentials' ? 400 : 500;
    res.status(status).json({ message: err.message });
  }
};
