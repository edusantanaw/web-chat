import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

export function verifyToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authorization = req.headers.authorization;
    if (!authorization) return res.status(401).json("token not exists!");
    const token = authorization.split(" ")[1];
    try {
        verify(token, token);
        return next();
    } catch (err) {
        return res.status(401).json({
            message: "Token invalido!",
        });
    }
}