import jwt from 'jsonwebtoken';
export const createToken = (id, email, expiresIn) => {
    const paylaod = { id, email };
    const secret = process.env.JWT_SECRET || ""; // Provide a default value for JWT_SECRET if it is undefined
    const token = jwt.sign(paylaod, secret, {
        expiresIn,
    });
    return token;
};
//# sourceMappingURL=token-manager.js.map