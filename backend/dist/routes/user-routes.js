import { Router } from 'express';
import { getAllUsers, userSignup, userLogin } from '../controllers/user-controllers.js'; // Import the userLogin function
import { loginValidator, signupValidator, validate } from '../utils/validators.js'; // Import the signupValidator with the file extension
export { signupValidator, validate }; // Export the signupValidator function
const userRoutes = Router();
userRoutes.get('/', getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map