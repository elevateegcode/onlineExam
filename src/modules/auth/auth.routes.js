import express from 'express';
import { validation } from '../../middleware/validation.js';
import { signInSchema, signUpSchema } from './auth.validation.js';
import { checkEmail } from '../user/controller/user.controller.js';
import { changePassword, facebookAuth, googleAuth, signIn, signUp } from './controller/auth.controller.js';

const authRoutes = express.Router();

authRoutes.post("/signup", checkEmail, validation(signUpSchema), signUp)
authRoutes.post("/signin", validation(signInSchema), signIn)
authRoutes.patch("/changePassword/:id", changePassword)
authRoutes.post("/facebook", facebookAuth);
authRoutes.post("/google", googleAuth);

export default authRoutes;