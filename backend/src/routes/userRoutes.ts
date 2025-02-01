import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import { CreateUser, LoginUser } from "../controllers/userController";
import prismaClient from "../prisma/prisma";

const userRouter = Router();

userRouter.post("/register", CreateUser);
userRouter.post("/login", LoginUser);

userRouter.get("/verify", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token não fornecido" });
    }
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload & { id: string };

    const user = await prismaClient.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Erro ao verificar o token" });
  }
});

export default userRouter;
