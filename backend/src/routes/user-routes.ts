import { Router, RequestHandler } from 'express';
import { getAllUsers, userSignup, userLogin } from '../controllers/user-controllers.js'; // Import the userLogin function

import { loginValidator, signupValidator, validate } from '../utils/validators.js'; // Import the signupValidator with the file extension

export { signupValidator, validate }; // Export the signupValidator function

const userRoutes = Router();

userRoutes.get('/', getAllUsers);
userRoutes.post("/signup", validate(signupValidator) as RequestHandler, userSignup);
userRoutes.post("/login", validate(loginValidator) as RequestHandler, userLogin);
export default userRoutes;