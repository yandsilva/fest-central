import { NextFunction, Request, Response } from "express";
import { catchAsyncErrors } from "./catchAsyncErrors";
import ErrorHandler from "./Error";
import jwt from "jsonwebtoken";

interface JwtPayload {
  id: string;
}

export const isAuthenticatedUser = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.authToken;

    if (!token) {
      return next(
        new ErrorHandler("Por favor, faça o login para acessar", 401)
      );
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY || "açlskdjfçaklsdjfalçksdfjklsdf"
      ) as JwtPayload;

      req.userId = decoded.id;

      next();
    } catch (error: any) {
      return next(
        new ErrorHandler(
          error.message || "Falha na autenticação do usuário",
          401
        )
      );
    }
  }
);
