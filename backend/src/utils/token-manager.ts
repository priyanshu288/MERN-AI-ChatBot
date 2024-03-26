import jwt, { Secret } from 'jsonwebtoken';

export const createToken = (id: string, email: string, expiresIn: string) => {
    const paylaod = { id, email };
    const secret: Secret = process.env.JWT_SECRET || ""; // Provide a default value for JWT_SECRET if it is undefined
    const token = jwt.sign(paylaod, secret, { 
        expiresIn,
     });
    return token;
};